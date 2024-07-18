const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new menu item
router.post('/', async (req, res) => {
    try {
        const menuItem = await db.MenuItem.create(req.body);
        res.json(menuItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all menu items for a restaurant
router.get('/', async (req, res) => {
    try {
        const menuItems = await db.MenuItem.findAll({ where: { restaurantId: req.query.restaurantId } });
        res.json(menuItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
