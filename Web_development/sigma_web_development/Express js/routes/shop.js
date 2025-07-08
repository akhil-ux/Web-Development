const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Shop home page')
})

// define the about route
router.get('/about/:slug', (req, res) => {
  res.send(`About shop and intro to ${req.params.slug}`)
})
 

module.exports = router