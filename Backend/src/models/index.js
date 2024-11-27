const mongoose = require('mongoose')
const config = require('../config/general.config')
const clc = require('../helper/cliColor.helper')

async function connectToDb() {
  try {
    await mongoose.connect(config.DB_CONNECT)
    console.log(clc.success('Connected to the database successfully!'))
  } catch (err) {
    console.error(clc.error('Database connection error:', err))
  }

  // Optional: Handle mongoose connection events
  mongoose.connection.on('disconnected', () => {
    console.log(clc.error('Mongoose connection disconnected.'))
  })
}

module.exports = connectToDb
