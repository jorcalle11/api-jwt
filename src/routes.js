'use strict'

function routes(app) {
  app.get('/', (req,res) => {
    res.send('hello world!!')
  })
}

module.exports = routes