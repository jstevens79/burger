const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
  burger.all(data => {
    const hbsObj = {
      burgers: data
    }
    res.render("index", hbsObj)
  })
})

router.post('/api/burgers', (req, res) => {
  burger.create(["burger_name"], [req.body.name], function(result) {
    res.json({ id: result.insertId})
  })
})


router.put('/api/burgers/:id', (req, res) => {
  const Condition = `id = ${req.params.id}`
  burger.update({
    devoured: req.body.devoured
  }, Condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

router.delete('/api/burgers/:id', (req, res) => {
  const Condition = `id = ${req.params.id}`

  burger.delete(Condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
  
})

module.exports = router;