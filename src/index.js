'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./routes')
const port = process.env.PORT ||5000

// app setup
app.use(morgan('dev'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// server setup
const server = http.createServer(app)
server.listen(port)
console.log(`Server listenning and running in the port ${port}`)