//first import the database in here
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //to encrypt our passwords

//start the connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


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

        if(results.length > 0) {
            //meaning that there is already a same email registered
            return res.render('register', {
                message: 'That email is already in use'
            })
        } else if( password !== passwordConfirm ) {
            return res.render('register', {
                message: 'The passwords do not match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8); //await bc this process of encrypting passwords could take a few seconds more. The default of 8 rounds of hashing should be an ok encryption
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {username: username, email: email, password: hashedPassword}, (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(results);
                    return res.render('register', {
                        message: 'User registered'
                    });
                }
            });
            
    }) ;

    //to hash the password we need to import the bcryptjs
    //we want to handle errors like 1 person with the same email to register 2 times

    //res.send("testing");


    


}