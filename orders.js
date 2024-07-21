const express = require('express');
const router = express.Router();
const db = require('../models');

// Create a new order
router.post('/', async (req, res) => {
    try {
        const order = await db.Order.create({
            userId: req.body.userId,
            total: req.body.total,
            status: req.body.status
        });

        const orderItems = req.body.orderItems.map(item => ({
            orderId: order.id,
            menuItemId: item.menuItemId,
            quantity: item.quantity
        }));

        await db.OrderItem.bulkCreate(orderItems);

        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all orders for a user
router.get('/', async (req, res) => {
    try {
        const orders = await db.Order.findAll({ where: { userId: req.query.userId } });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
