const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Restaurant = require('./restaurant')(sequelize, Sequelize);
db.MenuItem = require('./menuItem')(sequelize, Sequelize);
db.Order = require('./order')(sequelize, Sequelize);
db.OrderItem = require('./orderItem')(sequelize, Sequelize);

// Define relationships
db.Restaurant.hasMany(db.MenuItem, { foreignKey: 'restaurantId' });
db.MenuItem.belongsTo(db.Restaurant, { foreignKey: 'restaurantId' });

db.User.hasMany(db.Order, { foreignKey: 'userId' });
db.Order.belongsTo(db.User, { foreignKey: 'userId' });

db.Order.hasMany(db.OrderItem, { foreignKey: 'orderId' });
db.OrderItem.belongsTo(db.Order, { foreignKey: 'orderId' });

db.MenuItem.hasMany(db.OrderItem, { foreignKey: 'menuItemId' });
db.OrderItem.belongsTo(db.MenuItem, { foreignKey: 'menuItemId' });

module.exports = db;
