const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

const app = express();
const routes = require('./routes')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

module.exports = app

