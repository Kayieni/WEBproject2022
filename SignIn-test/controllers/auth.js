//first import the database in here
const mysql = require('mysql');
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //to encrypt our passwords
const { setSession, getSession } = require('./sessions');
//const { escapeSelector } = require('jquery');
//const session = require('express-session');
//const { setSession, getSession, checkAuth } = require('../controllers/sessions');

var session;


//start the connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

//-----for register-------

exports.register = (req,res) => {
    console.log(req.body); //req.body is grabbing all the data that we have from the form
    
    //grab with node js in req.body.xxx via the xxx=name of the input fields of form in register.hbs
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    const {username, email, password, passwordConfirm } = req.body; //this is called desturing and its a shorter way to express the above 

    //start quering into the database
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => { //use of async bc we use await in case of delays
        if(error) {
            console.log(error); //so i know what is going on
        }

        //meaning that there is already a same email registered
        if(results.length > 0) {
            
            return res.render('register', {
                message: 'That email is already in use'
            })
        } 
        //check if username is unique
        //bus this account is registered even though i say not to
        db.query('SELECT username FROM users WHERE username = ?', [username], async (error,results) => {
            if(error) {
                console.log(error);
            }

            if(results.length > 0) {
                return res.render('register', {
                    message: 'That username is already taken'
                })
            }
        })


        //last error handling: check if the 2 password fields have equivalent content typed in
        if( password !== passwordConfirm ) {
            return res.render('register', {
                message: 'The passwords do not match'
            })
        }

        let hashedPassword = await bcrypt.hash(password, 8); //await bc this process of encrypting passwords could take a few seconds more. The default of 8 rounds of hashing should be an ok encryption
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {username: username, email: email, password: hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(results);
                    res.redirect("/login")
                    return res.render('login', {
                        message: 'User registered'
                    });
                }
            });
            
    }) ;

    //to hash the password we need to import the bcryptjs
    //we want to handle errors like 1 person with the same email to register 2 times

}


//---- for login -----

exports.login = (req,res) => {
    console.log(req.body);

    const { logname, logpwd } = req.body;
    //start questing into the database
    db.query('SELECT password FROM users WHERE username = ? OR email = ?', [logname, logname], async (error,results) => {
        //error handling
        //----------------------------------------------------------------------
        //!!! prepei na kanw to username case sensitive, diladi to Emma =/= emma
        //----------------------------------------------------------------------
        if(error) {
            console.log(error); //so i know what is the error and i an fix it
        }

        if(results.length < 1) {
            //meaning that there is no entry with this email or username
            return res.render('login', {
                message: 'That user does not exit. Please try again or register a new user.'
            })
        }

        const comparison = bcrypt.compare(logpwd, results[0].password, function (err, result) {
            if (err) {
                console.log(err);
            }

            if (result) {

                //set session
                session = req.session;
                session.userid = logname;
                console.log(req.session);
                const userid = req.session.userid;
                exports.userid = userid;
                console.log('userid from controllers auth.js is:', userid);
                getSession;
                return res.render('welcome', {user: userid});

            } else {
                return res.render('login', {
                    message: 'Your password in incorrect, please try again.'
                });
            }
        })
    });

}
