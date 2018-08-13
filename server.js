const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Message = require('./api/models/msgModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/msgRoutes');

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/msgdb');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);
