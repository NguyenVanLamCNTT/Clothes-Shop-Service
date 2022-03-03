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
         Sizes.hasMany(models.ProductSizeColor,{
             as: 'products_size_color',
             foreignKey: 'size_id'
         });
     }
     return Sizes;
}
