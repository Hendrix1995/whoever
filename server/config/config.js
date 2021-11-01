const dotenv = require('dotenv');
dotenv.config();

const config = {
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: 'whoever',
    dialect: 'mysql'
  }
};

module.exports = config;
