const sequelize = require('../config/connection');
const {Review} = require("../models/index");

const reviewSeedData = require("./reviewSeed.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Review.bulkCreate(reviewSeedData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();