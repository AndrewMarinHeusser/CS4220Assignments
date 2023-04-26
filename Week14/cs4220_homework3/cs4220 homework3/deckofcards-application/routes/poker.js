const router = require('express').Router();

const database = require('../db');
const deckofcards = require('deckofcards-api');

/**
 * @description             format the card array response
 * @param {Array} cards     array of card objects
 * @return {Array}          array of card object with formatted name and code
 */
const _formatCards = (cards) => {
    return cards.map((card) => {
        return {
            formatted: `${card.value} of ${card.suit}`,
            code: card.code
        };
    });
};

/**
 * @api {Middleware}  /poker        middleware for all routes in poker.js
 */
router.use((req, res, next) => {
    console.log('Running Router Level Middleware');

    const { headers, query, originalUrl } = req;

    const urlArray = originalUrl.split("/");

    // add a metadata key on the query object
    // and store details about the user agent and game start
    if (urlArray[1] == 'poker' && typeof(urlArray[2]) != "string"){
        query.metadata = {
            agent: headers['user-agent'],
            gameStart: new Date()
        };
        console.log("url arr[1] (should be poker):", urlArray[1]);
        console.log("url arr[2] (should be blank):", urlArray[2]);
        console.log("first success");
    } else if (urlArray[1] == 'poker' && typeof(urlArray[2]) == "string"){
        query.metadata = {
            gameEnd: new Date()
        };
        console.log("url arr[1] (should be poker):", urlArray[1]);
        console.log("url arr[2]:(should be rest this time):", urlArray[2]);
        console.log("second success");
    }
    // HOMEWORK #1
    // console.log(req)

    next();
});

/**
 * @api {GET} /poker                start a new poker game by drawing cards
 * @apiQuery {Number} count         deck count
 * @apiQuery {Number} cardCount     number of cards to draw
 * @apiExample                      localhost:8888/poker
 */
router.get('/poker', async (req, res) => {
    try {
        const { query } = req;
        const { count = 1, cardCount = 5, metadata } = query;

        const deck = await deckofcards.buildDeck(count);
        const draw = await deckofcards.drawCards(deck.deck_id, cardCount);

        const hand = _formatCards(draw.cards);

        const results = { deckId: deck.deck_id, hand };

        res.json(results);

        database.save({ ...results, metadata });
    } catch (error) {
        res.status(500).json(error.toString());
    }
});

/**
 * @api {GET} /poker/:deckId        end poker game by removing cards and redrawing
 * @apiParam {String} deckId        unique id of the deck
 * @apiQuery {String} cards         card codes to discard and replace
 * @apiExample                      localhost:8888/poker/cyiwih4zrvwh?cards=AH,KH
 */
router.get('/:deckId', async (req, res) => {
    try {
        const { params, query } = req;

        const { deckId } = params;
        const { cards, metadata } = query;

        const selected = cards.split(',');
        const original = database.find(deckId);

        const filtered = original.hand.filter((card) => {
            return !selected.includes(card.code);
        });

        const reDraw = await deckofcards.drawCards(deckId, selected.length);

        const formatted = _formatCards(reDraw.cards);

        const results = {
            deckId,
            hand: [...filtered, ...formatted]
        };

        res.json(results);

        // HOMEWORK #3
        const finalHand = results.hand;
        database.update(deckId, { finalHand, metadata });
        }
        catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;
