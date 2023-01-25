//first import the database in here
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); //to encrypt our passwords

//start the connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// fuction to check password strength:
exports.checkStrength = function(password) {
    let strength = 0;
    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
        strength += 1;
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
    }
    //If password length is greater than 7
    if (password.length > 7) {
        strength += 1;
    }
    // If value is less than 2 its not good
    // If value is 3, its ok password but not enough
    // If value is 4, its perfect and can continue
    return strength;
}

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
            
            // return res.render('register', {
            //     message: 'That email is already in use'
            // })
            console.log(req.session);
            req.session.successMessage = 'That email is already in use';
            return res.redirect("/register");
        } 
        //check if username is unique
        //bus this account is registered even though i say not to
        db.query('SELECT username FROM users WHERE username = ?', [username], async (error,results) => {
            if(error) {
                console.log(error);
            }

            if(results.length > 0) {
                // return res.render('register', {
                //     message: 'That username is already taken'
                // })
                console.log(req.session);
                req.session.successMessage = 'That username is already taken';
                return res.redirect("/register");
            }
        })



        //last error handling: check if the 2 password fields have equivalent content typed in and if its strong enough
        if( password !== passwordConfirm ) {
            // return res.render('register', {
            //     message: 'The passwords do not match'
            // })
            console.log(req.session);
            req.session.successMessage = 'The passwords do not match';
            return res.redirect("/register");
        } else {
            const strength = exports.checkStrength(password);
            if(strength < 4 ){
                // return res.render('register', {
                //     message: 'The password is not strong enough'
                // });
                console.log(req.session);
                req.session.successMessage = 'The password is not strong enough';
                return res.redirect("/register");
            }
            
        }



        let hashedPassword = await bcrypt.hash(password, 8); //await bc this process of encrypting passwords could take a few seconds more. The default of 8 rounds of hashing should be an ok encryption
        console.log(hashedPassword);

        let current_date = new Date().toJSON().slice(0, 10);

        db.query('INSERT INTO users SET ?', {username: username, email: email, password: hashedPassword, register_date: current_date}, (error, results) => {
                if(error) {
                    console.log(error);
                } else {
                    console.log(req.session);
                    req.session.successMessage = 'User registered. Please login';
                    return res.redirect("/login");
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

    // check if its a user
    db.query('SELECT password FROM users WHERE username = ?', [logname], async (error,results) => {
        //error handling
        //----------------------------------------------------------------------
        //!!! prepei na kanw to username case sensitive, diladi to Emma =/= emma
        //----------------------------------------------------------------------
        if(error) {
            console.log(error); //so i know what is the error and i an fix it
        }
        else if(results.length < 1) {
            // check if its admin
            // ...........
            // ...........
            // ...........
            // ...........
            // ...........
            if(logname==='admin' && logpwd === 'admin'){
                req.session.authenticated = true;
                req.session.role = "admin";
                req.session.userid = logname;
                req.session.password = logpwd;
                return res.redirect('/admin')
                
            }else {
                //meaning that there is no entry with this email or username
                // return res.render('login', {
                //     message: 'That user does not exit. Please try again or register a new user.'
                // })
                
                console.log(req.session);
                req.session.successMessage = 'That user does not exit. Please try again or register a new user.';
                return res.redirect('/login');
            }   
        }
        
        const comparison = bcrypt.compare(logpwd, results[0].password, function (err, result) {
            console.log(results[0].password);
            console.log(logpwd);


            if (err) {
                console.log(err);
            }
            
            if (result) {
                //set the session if login
                req.session.authenticated = true;
                req.session.userid = logname;
                req.session.role = "user";               
                console.log(req.session);
                db.query('SELECT * FROM users WHERE username = ?', [logname], async (error, results) => {
                    if (error) {
                      console.log(error);
                    } else {
                        if(results.length > 0){
                            // req.session.user_data = JSON.stringify(results); 
                            req.session.user_data = results; 
                            // req.session.user_data.role = "user";
                            return res.redirect('/welcome');
                        }
                    }
                });

            } else {
                console.log(req.session);
                req.session.successMessage = 'Your password in incorrect, please try again.';
                return res.redirect('/login');
            }
        })
    });

}

exports.updatename = (req,res) => {
    const {username, oldpassword} = req.body;
    console.log(req.body);
    

    // first check if the username is taken    
    db.query('SELECT username FROM users WHERE username = ?', [username], async (error,results) => {
        if(error) {
            console.log(error);
        }

        if(results.length > 0) {
            console.log(req.session);
            req.session.successMessage = 'That username is already taken';
            req.session.inputData = req.body;
            return res.redirect("/profile/edit");
        }

        //check if the old password is correct
        db.query('SELECT password FROM users WHERE username = ?', [req.session.userid], async (error,results) => {
            if(error) {
                console.log(error); //so i know what is the error and i an fix it
            }

            const comparison = bcrypt.compare(oldpassword, results[0].password, async function (err, result) {
                if (err) {
                    console.log(err);
                }

                // if the old password is correct...
                if (result) {
                        db.query('UPDATE users SET username = ? WHERE username = ?', [username,req.session.userid], async (error,results) => {
                            if (error) {
                                console.log(error);
                            } else {
                                console.log('successful update');
                                req.session.userid = username;
                                console.log(req.session);
                                req.session.successMessage = 'You changed your account details successfully';
                                req.session.inputData = null;
                                return res.redirect("/profile/edit");
                            }
                        });
                }else {
                    console.log(req.session);
                    req.session.successMessage = 'Your current password in incorrect, please try again.';
                    return res.redirect("/profile");
                }
            })
        });         
    }) ;
}

exports.updatepass = (req,res) => {
    const { oldpassword, newpassword } = req.body;
    console.log(req.body);

    //check if the old password is correct
    db.query('SELECT password FROM users WHERE username = ?', [req.session.userid], async (error,results) => {
        if(error) {
            console.log(error); //so i know what is the error and i an fix it
        }

        const comparison = bcrypt.compare(oldpassword, results[0].password, async function (err, result) {
            if (err) {
                console.log(err);
            }

            // if the old password is correct...
            if (result) {
                // check if the new password is strong enough
                const strength = exports.checkStrength(newpassword);

                if (oldpassword == newpassword){
                    console.log(req.session);
                    req.session.successMessage = 'You cannot use the same password';
                    return res.redirect("/profile/edit");
                } else if(strength < 4 ){
                    console.log(req.session);
                    req.session.successMessage = 'The new password is not strong enough';
                    return res.redirect("/profile/edit");
                } else {
                // successfull update
                    let hashedPassword = await bcrypt.hash(newpassword, 8); //await bc this process of encrypting passwords could take a few seconds more. The default of 8 rounds of hashing should be an ok encryption
                    console.log(hashedPassword);

                    db.query('UPDATE users SET password = ? WHERE username = ?', [hashedPassword,req.session.userid], async (error,results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('successful update');
                            req.session.userid = username;
                            console.log(req.session);
                            req.session.successMessage = 'You changed your account details successfully';
                            req.session.inputData = null;
                            return res.redirect("/profile");
                        }
                    });
                }
            } else {
                console.log(req.session);
                req.session.successMessage = 'Your current password in incorrect, please try again.';
                return res.redirect("/profile/edit");
            }
        })


    });         
}

exports.review = (req,res) => {
    console.log(req.session);
    console.log('im inside review auth')
    const counter = parseInt(req.body.product_counter);
    const DiscPrice = parseInt(req.body.disc_price);
    const entry_by= parseInt(req.body.entry_by);
    console.log(entry_by);
    const interact = parseInt(req.body.interact);

    let current_date = new Date().toJSON().slice(0,10);
    
    db.query('SELECT interaction.counter, userID, price FROM interaction WHERE interaction.counter = ? ', [counter], async (error,results) => {
        if(error) {
            console.log(error); //so i know what is the error and i an fix it
        } else if(results.length < 1) {
            console.log(req.session);
            console.log("you can do like");
            db.query('INSERT INTO interaction SET ? ',{price:DiscPrice, userID: req.session.user_data[0].userID, counter:counter,timestamp:current_date, interaction:interact },(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log('Interaction inserted to db');
                    
                }
            });

            db.query('UPDATE users SET month_score = ? WHERE userID = ?',[5, entry_by],(error,results)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log('Users score updated')
                    res.redirect("/reviews");
                }
            });

        } else {
            console.log("you cant");
        }   
    });
        

    // table interaction new entry
        // price of disc that time
        // userid of the user liked
    // table users update of entry_by
        // monthly_score + 5 if like
        // monthly_score -1 if disklike

    // if i do like, it has to disable both like and dislike 

}