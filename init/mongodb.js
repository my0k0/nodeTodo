require('dotenv').config()
const mongoose = require('mongoose')

const connectionUrl = 'mongodb://localhost:27017/todoDb'

const connectMongoDb = async () => {
  try {
    await mongoose.connect(connectionUrl)

    console.log('Database connection successful')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = connectMongoDb
