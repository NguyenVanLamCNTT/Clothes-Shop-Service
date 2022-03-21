'use strict'
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductSize extends Model {}
    ProductSize.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.BIGINT
        },
        size_id: {
            type: DataTypes.BIGINT
        },
        quantity: {
            type: DataTypes.BIGINT
        }
    }, {
        sequelize,
        tableName: 'product_size',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return ProductSize;
}
