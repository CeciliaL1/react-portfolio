var express = require('express');
var router = express.Router();
const connection = require('../lib/conn.js')

/* GET home page. */
router.get('/portfolio', (req, res) => {
  connection.connect((err) => {
    if (err) throw err;

    const query = 'SELECT * FROM projects';

    connection.query(query , (err, result) => {
      if (err) throw err;

      res.json(result);
    })
  })
});

router.get('/educations', (req, res) => {
  connection.connect((err) => {
    if (err) throw err;

    const query = 'SELECT * FROM educations';

    connection.query(query , (err, result) => {
      if (err) throw err;

      res.json(result);
    })
  })
});

router.get('/workexperience', (req, res) => {
  connection.connect((err) => {
    if (err) throw err;

    const query = 'SELECT * FROM workexperience';

    connection.query(query , (err, result) => {
      if (err) throw err;

      res.json(result);
    })
  })
});
module.exports = router;
