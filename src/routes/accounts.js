const express = require('express');
const router = express.Router();
const { accounts } = require('../data.js');

router.get('/savings', function(req, response) {
    response.render('account', {account: accounts.savings});
});
router.get('/checking', function(req, response) {
    response.render('account', {account: accounts.checking});
});
router.get('/credit', function(req, response) {
    response.render('account', {account: accounts.credit});
});

module.exports = router;
