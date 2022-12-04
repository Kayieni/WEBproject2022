//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const express = require('express');

//performing tasks on a particular path is called routing


const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/login', (req,res) => {
    res.render('login');
})

router.get('/welcome', (req,res) => {
    res.render('welcome');
})

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;