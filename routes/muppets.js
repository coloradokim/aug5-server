var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json({ muppet: 'Kermit' });
});

module.exports = router
