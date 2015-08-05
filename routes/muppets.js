var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({ message: 'muppets route was successful!' });
});

module.exports = router
