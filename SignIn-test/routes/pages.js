//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const express = require('express');
const { setSession, getSession, endSession, checkAuth } = require('../controllers/auth');

//performing tasks on a particular path is called routing
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/set-session', (req,res) => {
    setSession;
});

router.get('/get-session', (req,res) => {
    getSession;
});

//===test====
router.get('/login', (req,res) => {
    res.render('login');
})

router.get('/welcome', (req,res) => {
    //The user is authenticated, display the user page
    checkAuth;
    res.render('welcome');
});

router.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            //An error occurred while destroying the session
            console.log(err);
            res.send('Error logging out');
        }else {
            //The session was successfully destroyed, redirect the user to the login page
            console.log('Session killed');
            res.render('login', {messagegood: 'You are logged out successfully!'});
        }
    });
})

router.get('/map', (req,res) => {
    res.render('map');
})

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;