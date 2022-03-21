'use strict'
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Products extends Model{}
    Products.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.BIGINT
        },
        description: {
            type: DataTypes.STRING
        },
        categories_id: {
            type: DataTypes.BIGINT
        },
        branding_id: {
            type: DataTypes.BIGINT
        },
        status: {
            type: DataTypes.STRING
        },
        discount: {
            type: DataTypes.BIGINT
        },
        quantity_sold: {
            type: DataTypes.BIGINT
        },
        color: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'products',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    Products.associate = (models) => {
        Products.hasMany(models.ProductSize,{
            as: 'product_size',
            foreignKey: 'product_id'
        });
        Products.hasMany(models.Images,{
            as: 'images',
            foreignKey: 'product_id'
        });
    }
    return Products;
}
