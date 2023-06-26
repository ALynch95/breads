const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', function(req, res) {
  res.render('index',
    {
      breads: Bread
    }
  )
})

module.exports = breads

// SHOW
breads.get('/:arrayIndex', function(req, res)  {
    res.send(Bread[req.params.arrayIndex])
  })
  