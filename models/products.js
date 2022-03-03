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
        }
    }, {
        sequelize,
        tableName: 'products',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    Products.associate = (models) => {
        Products.hasMany(models.ProductColor, {
            as: 'products_color',
            foreignKey: 'product_id'
        });
    }
    return Products;
}
