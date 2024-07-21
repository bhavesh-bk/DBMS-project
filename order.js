module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Order;
};
