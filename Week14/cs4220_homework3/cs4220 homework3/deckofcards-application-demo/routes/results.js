// HOMEWORK #4
const router = require('express').Router();
const database = require('../db');

router.get('/poker', async (req, res) => {
    try {
    const item = database.find();
    res.json(item);

    }catch (error) {
        res.status(500).json(error.toString());
    }
})
