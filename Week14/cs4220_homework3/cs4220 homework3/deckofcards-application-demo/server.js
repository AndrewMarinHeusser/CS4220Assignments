const express = require('express');

const app = express();
const port = 8888;

// require in the exported router from poker.js
const poker = require('./routes/poker.js');

// add routes to our express application
// our express app will now handle requests to /poker
app.use('/poker', poker);

// start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
