"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Category);
      Item.hasMany(models.Transaction);
    }
  }
  Item.init(
    {
      name: DataTypes.STRING,
      imgUrl: {
        type: DataTypes.STRING,
        defaultValue:
          "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",
      },
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      sku: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
