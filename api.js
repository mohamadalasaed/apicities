const Cities = require('./lebanonCities.json');
const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/lebanonCities', function (req, res) {
  res.send(Cities)
})
app.listen(3000)