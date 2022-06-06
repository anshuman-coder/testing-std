const express = require('express');
const student = require('../Model/student');
const router = express.Router();


router.get('/', (req, res) => {
  res.send("Server start!");
});

router.get('/student', (req, res) => {
  student.find()
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.status(400).send(err)
    });
  
});

router.get('/student/:id', (req, res) => {
  student.findOne({ _id: req.params.id })
    .then((response) => {
      res.json(response)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});




module.exports = router