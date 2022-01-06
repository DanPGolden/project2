const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/index.js');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

//app.engine('handlebars', exphbs({
  //extname: '.handlebars'
//}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on server http://localhost:' + `${PORT}`));
});