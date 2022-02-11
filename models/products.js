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
        detail: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        categories_id: {
            type: DataTypes.BIGINT
        },
        branding_id: {
            type: DataTypes.BIGINT
        },
        image_id: {
            type: DataTypes.BIGINT
        }
    }, {
        sequelize,
        tableName: 'products',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Products;
}
