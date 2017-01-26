'use strict'

const AuthController = require('./controllers/auth')
const { requireAuth,requireSignIn } = require('./utils/authorization')
const auth = new AuthController()
const API_AUTH = '/api/auth'

function routes(app) {
  app.get('/',(req,res) => res.send('Api rest with JWT'))
  app.get('/me',requireAuth, (req,res) => res.json(req.user))

  // auth routes
  app.post(`${API_AUTH}/signup`, auth.signUp)
  app.post(`${API_AUTH}/signin`, requireSignIn ,auth.signIn)
}

module.exports = routes