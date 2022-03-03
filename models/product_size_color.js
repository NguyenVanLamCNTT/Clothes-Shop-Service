'use strict'
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductSizeColor extends Model {}
    ProductSizeColor.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        product_color_id: {
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
        tableName: 'products_size_color',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return ProductSizeColor;
}
