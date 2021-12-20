const { Console } = require('../models/console');

const consoleData = [
  {
    category_type: 'PC',
  },
  {
    category_type: 'Xbox',
  },
  {
    category_type: 'PlayStation',
  },
  {
    category_type: 'Nintendo',
  },
];

const seedConsole = () => Category.bulkCreate(consoleData);

module.exports = seedConsole;