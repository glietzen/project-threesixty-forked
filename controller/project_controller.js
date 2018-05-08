const express = require('express');
let router = express.Router();

const db = require('./../models');


router.get('/', (req,res) => {
    res.render('login');
})

module.exports = router;