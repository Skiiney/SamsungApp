const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Message = require('./api/models/msgModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/msgRoutes');

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:teste123<dbpassword>@ds121282.mlab.com:21282/heroku_xpjr01hn');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);
