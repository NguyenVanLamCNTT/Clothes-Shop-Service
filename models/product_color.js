'use strict'

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductColor extends Model {}
    ProductColor.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.BIGINT
        },
        color_id: {
            type: DataTypes.BIGINT
        }
    }, {
        sequelize,
        tableName: 'products_color',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    ProductColor.associate = (models) => {
        ProductColor.hasMany(models.Images, {
            as: 'images',
            foreignKey: 'product_color_id'
        });
    }
    return ProductColor;
}
