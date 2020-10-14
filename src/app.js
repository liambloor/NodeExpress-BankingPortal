const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./src/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("PS Project Running on port 3000!")
});

app.get('/', function(req, response) {
    response.render('index.ejs', {title: 'Index'});
});
