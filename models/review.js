const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
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
        validate: {
            isAlphanumeric: true
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
      },
      author: {
        type: DataTypes.STRING, // author = login_id made from signup, connect these for when they want to delete a review
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      game_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'game',
              key: 'id',
          },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
<<<<<<< HEAD
        },
      },
=======
        }
      }
>>>>>>> c2170374e98b743699a9c5033721a638afa261f3
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'review',
    }
  );
  
  module.exports = Review;