var express = require('express');
var router = express.Router();
const connection = require('../lib/conn.js')

router.get('/', (req, res) => {
    connection.connect((err) => {
      if (err) throw err;
  
      const query = 'SELECT * FROM educations';
  
      connection.query(query , (err, result) => {
        if (err) throw err;
  
        res.json(result);
      })
    })
  });
  
  module.exports = router;
