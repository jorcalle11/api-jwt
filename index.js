'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./src/routes')
const {
  PORT,
  URL_DATABASE,
  NODE_ENV,
  DATABASE_PROD: { NAME,USER,PASSWORD }
} = require('./src/config')

// db connection
let url = URL_DATABASE
if (NODE_ENV === 'production' && NAME && USER && PASSWORD) {
  url = `mongodb://${USER}:${PASSWORD}@ds133249.mlab.com:33249/${NAME}`
}

mongoose.connect(url)

// app setup
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// server setup
const server = http.createServer(app)
server.listen(PORT)
console.log(`Server listenning and running in the PORT ${PORT}`)
