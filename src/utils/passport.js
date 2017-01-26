const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

const localOptions = {
  usernameField: 'email'  
}

const jwtOptions = {
  jwtFromRequest : ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.KEY_SECRET_TOKEN
}

// create a local Strategy
const localLogin = new LocalStrategy(localOptions,function(email,password,done) {
  User.findOne({ email }, (err,user) => {
    if (err) return done(err)
    if (!user) return done(null,false)
    
    user.validPassword(password, function(err,isEqual) {
      if (err) return done(err)
      if (!isEqual) return done(null,false)
      done(null,user)
    })
  })
})

// Create a jwt Strategy
const jwtLogin = new JwtStrategy(jwtOptions,function(payload,done) {
  User.findById(payload.sub, (err,user) => {
    if (err) return done(err,false)
    if (!user) return done(null,false)
    done(null,user)
  })
})

passport.use(jwtLogin)
passport.use(localLogin)