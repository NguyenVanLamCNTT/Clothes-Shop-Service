'use strict'

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
     class Sizes extends Model {}
     Sizes.init({
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
         tableName: 'size',
         underscored: true,
         createdAt: 'created_at',
         updatedAt: 'updated_at'
     });
     Sizes.associate = (models) => {
         Sizes.hasMany(models.ProductSize,{
             as: 'product_size',
             foreignKey: 'size_id'
         });
     }
     return Sizes;
}
