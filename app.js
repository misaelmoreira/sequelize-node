const express = require('express');
var path = require('path');
var ejs = require('ejs');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', function(req, res) {
    return res.render('index', {});
});

app.listen(3000)