/*
    // Downloading from Canvas with a package.json
    1. run: npm install
    2. run the demo: node superagent-request.js


    // Starting from a brand new Node.js project with NO package.json
    1. run: npm init
    2. answer the question prompts on your terminal
    3. verify: package.json was created
    4. run: npm install --save <npm module you need>
 */
const superagent = require('superagent');

const cdnjs = 'https://api.cdnjs.com/libraries?limit=10';

// use superagent with callbacks
const superagentCallbacks = (url) => {
    superagent.get(url).end((error, res) => {
        if (!error) {
            console.log(res.headers);
            console.log(res.statusCode);
            console.log(res.body);
        } else {
            console.log(error);
        }
    });
};
superagentCallbacks(cdnjs);

// use superagent with async/await
const superagentAsyncAwait = async (url) => {
    try {
        const res = await superagent.get(url);
        console.log(res.headers);
        console.log(res.statusCode);
        console.log(res.body);
    } catch (error) {
        console.log(error);
    }
};
superagentAsyncAwait(cdnjs);
