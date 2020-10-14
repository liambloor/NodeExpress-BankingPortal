const fs = require('fs');
const path = require('path');
const {accounts, users, writeJSON} = require('./data');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');
const express = require('express');
const app = new express();

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, response) {
    response.render('index', {title: 'Account Summary', accounts: accounts});
});
app.get('/profile', function(req, res) {
    res.render('profile', {user: users[0]});
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.listen(3000, function() {
    console.log("PS Project Running on port 3000!");
});


