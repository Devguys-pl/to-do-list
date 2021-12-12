const express = require('express');
const homeRouter = express.Router();


homeRouter
    .get('/', (req, res) => {
        res.render('layouts/hello.hbs');
    })






module.exports = {
    homeRouter,
};