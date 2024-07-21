const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_ordering_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
