const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.all(data => {
    const hbsObj = {
      burgers: data
    }
    console.log(hbsObj)
    res.render("index", hbsObj)
  })
})

router.post('/api/burgers', (req, res) => {
  burger.create(["burger_name"], [req.body.name], function(result) {
    res.json({ id: result.insertId})
  })
})


router.put('/api/burgers/:id', (req, res) => {

})

router.delete('/api/burgers/:id', (req, res) => {


})

module.exports = router;