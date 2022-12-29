//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const { application } = require('express');
const express = require('express');
const { setSession, getSession } = require('../controllers/auth');

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

// router.get('/login', (req,res) => {
//     res.render('login');
// })

//===test====

// router.get('/welcome', (req,res) => {
//     session = req.session;
//     req.session.userid = logname;
//     console.log(req.session);
//     if(session.userid){
//         res.render('welcome', {user:req.session.userid})
//     }else(
//         res.render('login', {message:"unauthorized user"})
//     )
// })

// router.get('/set-session', setSession);
// router.get('/get-session', getSession);


router.get('/welcome', (req,res) => {
    res.render('welcome');
});

// router.get('/set-session', (req,res) => {
//     setSession;
// });

// router.get('/get-session', (req,res) => {
//     getSession;
// });

router.get('/logout', (req,res) => {
    req.session.destroy();
    res.render('index');
})

router.get('/map', (req,res) => {
    res.render('map');
})

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;