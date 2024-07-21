const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new restaurant
router.post('/', async (req, res) => {
    try {
        const restaurant = await db.Restaurant.create(req.body);
        res.json(restaurant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await db.Restaurant.findAll();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
