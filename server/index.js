const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

//get express app
const app = express();
const port = process.env.PORT || 4568;

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.listen(port, function () {
  console.log('Listenening on port', port);
})
