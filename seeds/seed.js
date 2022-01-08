const sequelize = require('../config/connection');
const {Game, Review, User} = require("../models");

const gameSeedData = require("./gameSeeds.json")
const userData = require("./usersDummyData.json")
const reviewSeedData = require("./reviewSeed.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
<<<<<<< HEAD
  await Game.bulkCreate(gameSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Review.bulkCreate(reviewSeedData, {
=======
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Game.bulkCreate(gameSeedData, {
>>>>>>> c2170374e98b743699a9c5033721a638afa261f3
    individualHooks: true,
    returning: true,
  });
  await Review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  })
  .catch ((err) => {
    console.log(err)
  });
  process.exit(0);
};
seedDatabase();
