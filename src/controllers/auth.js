'use strict'
const User = require('../models/user')
const encodeToken = require('../utils/token')

class Auth {
  signUp(req,res) {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(422).send({error: 'you must provide email and password'})
    }

    User.findOne({email},(err,user) => {
      if (err) return res.status(500).send(err)
      if (user) return res.status(422).send({error:'Email is in use'})

      const newUser = new User({email,password})
      newUser.save((err,userSaved) => {
         if (err) return res.send(err)
         res.send({token: encodeToken(userSaved)})
      })
    })
  }
  
  signIn(req,res) {
    res.send({token: encodeToken(req.user)})
  }
}

module.exports = Auth