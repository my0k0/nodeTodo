const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const connectMongoDb = require('./init/mongodb')
const todoRouter = require('./routes/todo')

const app = express()

connectMongoDb()
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', todoRouter)

module.exports = app
