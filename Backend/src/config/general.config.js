const dotenv = require('dotenv')
dotenv.config()

const _config = {
  PORT : process.env.PORT,
  DB_CONNECT: process.env.DB_CONNECT,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV
}

module.exports = Object.freeze(_config)