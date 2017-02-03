const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../public')));
