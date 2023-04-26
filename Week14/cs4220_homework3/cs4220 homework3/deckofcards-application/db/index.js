const fs = require('fs');
const path = require('path');

const FILE_NAME = '../../deckofcards-database/results.json';
const FULL_PATH = path.resolve(__dirname, FILE_NAME);

/**
 * @description             save the card data object
 * @param {Object} data     card object with deckId, hand, metadata
 */
const save = async (data) => {
    try {
        const results = require(FILE_NAME);
        results.push(data);

        await fs.promises.writeFile(FULL_PATH, JSON.stringify(results));
    } catch (error) {
        console.error(error);
    }
};

/**
 * @description                     find a card object by deck id or return all results
 * @param {String} id               the deck id (optional)
 * @return {Object or Array}        the card object by deck id or all results
 */
const find = (id) => {
    try {
        const results = require(FILE_NAME);

        if (id) {
            const item = results.find((result) => {
                return result.deckId === id;
            });

            return item;
        } else {
            return results;
        }
    } catch (error) {
        console.error(error);
    }
};
// HOMEWORK #2
const update = async (id, data) => {
    try {
        const results = require(FILE_NAME);
        const { finalHand, metadata } = data;

        if (id) {
            const deck = results.find((result) => {
                return result.deckId === id;
            });
            deck.finalHand = finalHand;
            deck.metadata.gameEnd = metadata.gameEnd;
        } else {
            return results;
        }
        await fs.promises.writeFile(FULL_PATH, JSON.stringify(results,null, 2));
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    save,
    find,
    update
};
