const sequelize = require('../config/connection');
const {Console, Game, Review, User} = require("../models");

const gameSeedsData = require("./gameSeeds.json")
const consoleData = require("./console.json")
const userData = require("./usersDummyData.json")
const reviewSeedData = require("./reviewSeed.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Game.bulkCreate(gameSeedsData, {
    individualHooks: true,
    returning: true,
  });
  await Console.bulkCreate(consoleData, {
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
