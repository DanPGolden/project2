const sequelize = require('../config/connection');
const {console, game, review, users} = require("../models");

const reviewSeedData = require("./reviewSeed.json")
const gameSeedsData = require("./gameSeeds.json")
const consoleData = require("./console.json")
const userData = require("./usersDummyData.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  });
  await game.bulkCreate(gameSeedsData, {
    individualHooks: true,
    returning: true,
  });
  await console.bulkCreate(consoleData, {
    individualHooks: true,
    returning: true,
  });
  await users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  }) 
  .catch ((err) => {
    console.log(err)
  });

  process.exit(0);
};

seedDatabase();
