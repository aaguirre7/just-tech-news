const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost' || '172.24.16.1' || 'j8oay8teq9xaycnm.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' ,
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;