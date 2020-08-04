'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treelocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  treelocation.init({
    lat: DataTypes.NUMBER,
    lng: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'treelocation',
  });
  return treelocation;
};