//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const express = require('express');

//performing tasks on a particular path is called routing
const router = express.Router();
var session; //a variable to save a session

//home route
router.get('/', (req,res) => {
    //console.log("im at: routes/pages.js home route and it works fine")
    res.render('index');
});

//register route
router.get('/register', (req,res) => {
    res.render('register');
});

//login route
router.get('/login', (req,res) => {
    res.render('login');
})

//home page route
router.get('/welcome', (req,res) => {
    session = req.session;
    req.session.userid = logname;
    console.log(req.session);
    if(session.userid){
        res.render('welcome', {user:req.session.userid})
    }else(
        res.render('login', {message:"unauthorized user"})
    )
})

router.get('/map', (req,res) => {
    res.render('map');
})

router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('login', {messagegood: "Logout Successfully...!"})
        }
    })
})

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;