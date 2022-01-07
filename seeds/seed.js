const sequelize = require('../config/connection');
const {Game, Review, User} = require("../models");

const gameSeedData = require("./gameSeeds.json")
const userData = require("./usersDummyData.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Game.bulkCreate(gameSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  }) 
  .catch ((err) => {
    console.log(err)
  });
  process.exit(0);
};
seedDatabase();
