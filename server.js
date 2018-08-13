/*
var express = require('express'),

app = express(),

port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function(req, res) { res.json({hello : 'world'});})

console.log('Message RESTful API server started on: ' + port);

*/

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
