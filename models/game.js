const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      game_name: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      studio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      game_image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'game',
    }
  );
  
  module.exports = Game;