'use strict'

const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Colors extends Model{}
    Colors.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'color',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return Colors;
}
