const fs = require('fs');
const path = require('path');
const express = require('express');
const app = new express();

app.use(express.static('./src/public'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync('src/json/users.json', 'utf8');
const users = JSON.parse(userData);

app.get('/', function(req, response) {
    response.render('index', {title: 'Account Summary', accounts: accounts});
});
app.get('/savings', function(req, response) {
    response.render('account', {account: accounts.savings});
})
app.get('/checking', function(req, response) {
    response.render('account', {account: accounts.checking});
})
app.get('/credit', function(req, response) {
    response.render('account', {account: accounts.credit});
})
app.get('/profile', function(req, res) {
    res.render('profile', {user: users[0]});
})

app.listen(3000, function() {
    console.log(accounts)
    console.log("PS Project Running on port 3000!")
});


