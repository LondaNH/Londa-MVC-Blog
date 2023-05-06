// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

// create connection to our database, pass in your MySQL information for username and password
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("blog_db", "root", "Kacku807!", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;