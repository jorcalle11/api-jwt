'use strict'

const AuthController = require('./controllers/auth')
const auth = new AuthController()

function routes(app) {
  // main route
  app.get('/', (req,res) => res.send('Api rest with JWT'))

  // auth routes
  const API_AUTH = '/api/auth'
  app.post(`${API_AUTH}/signup`, auth.signUp)
}

module.exports = routes