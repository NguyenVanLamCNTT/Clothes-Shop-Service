'use strict'

const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Images extends Model{}
    Images.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        first_path: {
            type: DataTypes.STRING,
        },
        people_path: {
            type: DataTypes.STRING
        },
        paths: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        }
    }, {
        sequelize,
        tableName: 'images',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    Images.associate = (models) => {
        Images.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'image_id'
        })
    }
    return Images;
}
