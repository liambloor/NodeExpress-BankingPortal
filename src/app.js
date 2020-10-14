const fs = require('fs');
const path = require('path');
const {accounts, users, writeJSON} = require('./data')
const express = require('express');
const app = new express();

app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, response) {
    response.render('index', {title: 'Account Summary', accounts: accounts});
});
app.get('/savings', function(req, response) {
    response.render('account', {account: accounts.savings});
});
app.get('/checking', function(req, response) {
    response.render('account', {account: accounts.checking});
});
app.get('/credit', function(req, response) {
    response.render('account', {account: accounts.credit});
});
app.get('/profile', function(req, res) {
    res.render('profile', {user: users[0]});
});
app.get('/transfer', function(req, res) {
    res.render('transfer');
});
app.post('/transfer', function(req, res) {
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    writeJSON();
    res.render('transfer', {message: "Transfer Completed"});
});
app.get('/payment', function(req, res) {
   res.render('payment', {account: accounts.credit});
});
app.post('/payment', function(req, res) {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount, 10);
    writeJSON();
    res.render('payment', {message: "Payment Successful", account: accounts.credit});
})

app.listen(3000, function() {
    console.log(accounts)
    console.log("PS Project Running on port 3000!")
});


