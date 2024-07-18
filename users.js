const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = await db.User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
