var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var muppets = require('./routes/muppets')

app.use('/api/muppets', muppets);

app.listen(process.env.PORT || 8080);
console.log('Yay! The server started');
