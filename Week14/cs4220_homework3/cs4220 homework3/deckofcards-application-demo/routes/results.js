// HOMEWORK #4
const router = require('express').Router();
const database = require('../db');

router.get('/', async (req, res) => {
    try {
    const item = database.find();
    res.json(item);
    //console.log(item);

    }catch (error) {
        res.status(500).json(error.toString());
    }
})
