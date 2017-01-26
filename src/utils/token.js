'use strict'

const jwt = require('jwt-simple')
const config = require('../config')

function encodeToken(user) {
  const payload = {
    sub: user._id,
    email: user.email,
    iat: new Date().getTime()
  }
  return jwt.encode(payload,config.KEY_SECRET_TOKEN)
}

module.exports = encodeToken