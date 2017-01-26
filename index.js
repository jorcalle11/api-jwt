'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const router = require('./src/routes')
const port = process.env.PORT ||5000

// db connection
mongoose.connect('mongodb://localhost/apiAuthUsers')

// app setup
app.use(morgan('dev'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// server setup
const server = http.createServer(app)
server.listen(port)
console.log(`Server listenning and running in the port ${port}`)