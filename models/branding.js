'use strict'

const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Branding extends Model{}
    Branding.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        count: {
            type: DataTypes.BIGINT
        }
    }, {
        sequelize,
        tableName: 'branding',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    Branding.associate = (models) => {
        Branding.hasMany(models.Products, {
            as: 'products',
            foreignKey: 'branding_id'
        });
    }
    return Branding;
}
