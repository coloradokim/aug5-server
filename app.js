require('dotenv').load()

var express    = require('express');
var bodyParser = require('body-parser');
var muppets = require('./routes/muppets');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/muppets', muppets);


app.listen(process.env.PORT || 8080);
console.log('Yay! The server started on port 8080');
