const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

// get express app
const app = express();
const port = process.env.PORT || 4568;

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

// routes
app.route('/domains')
  .get((req, res) => {
    console.log(req.params.id);
    res.sendFile(path.join(__dirname, '/../domains.json'));
  });

app.listen(port, () => {
  console.log('Listenening on port', port);
});
