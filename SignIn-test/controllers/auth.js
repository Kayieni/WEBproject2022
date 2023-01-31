//first import the database in here
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); //to encrypt our passwords
const fs = require('fs');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});


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
                console.log(req.session);
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
    console.log('entry by userID:',entry_by);
    const interact = parseInt(req.body.interact);
    


    let current_date = new Date().toJSON();
    console.log("current_date",current_date);
    var month_score;
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
            db.query('SELECT month_score FROM users WHERE userID = ?',[entry_by] , async (error,results) => {
                if(error){
                    console.log(error);
                }else{
                    console.log('Users month_score=',results[0].month_score);
                    month_score = results[0].month_score;
                    if(interact===1){
                        month_score = month_score + 5;     
                    }
                    else if(interact===0){
                        month_score = month_score - 1;
                    }
                    console.log(month_score);
                    db.query('UPDATE users SET month_score = ? WHERE userID = ?',[month_score, entry_by],(error,results)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log('Users score updated');
                            res.redirect("/reviews");
                        }
                    });
                }
            });
            
            

        }else {
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


exports.stock = (req,res) => {
    const stock = parseInt(req.body.stock);
    const counter = parseInt(req.body.product_counter);

    if(stock===1){
        console.log('stock=',stock);
        db.query('UPDATE product SET stock = 0 WHERE counter = ?',[counter],(error,results)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log('Stock set to 0');
                            res.redirect("/reviews");
                        }
                    });
    }else if(stock===0){
        console.log('stock=',stock);
        db.query('UPDATE product SET stock = 1 WHERE counter = ?',[counter],(error,results)=>{
                        if(error){
                            console.log(error);
                        }else{
                            console.log('Stock set to 1');
                            res.redirect("/reviews");
                        }
                    });
    }
}


exports.save_discount = (req,res) => {
    console.log('inside save discount');
    const price = parseFloat(req.body.disc_price);
    const counter = parseInt(req.body.counter);
    const prodID = parseInt(req.body.prodID);
    console.log("prodID =", prodID);
    const store_name = req.body.store_name;
    console.log('store_name =',store_name);
    const original_price = parseFloat(req.body.original_price);
    const entry_by= req.body.entry_by;
    console.log("userID=",entry_by);

    const checkOriginalPriceQuery = `SELECT original_price FROM product WHERE counter=${counter}`;
    const checkDiscountedPriceQuery = `SELECT disc_price FROM discount  WHERE counter=${counter} ORDER BY entry_date DESC`;
    // 

    db.query(checkOriginalPriceQuery, (err, result) => {
        if (err) {
            console.log("error1: No original prices found");
            return console.log(err);
        }

        const originalPrice = result[0].original_price;
        db.query(checkDiscountedPriceQuery, (err, result) => {
            if (err) {
                console.log("error2: No discount prices found");
                return console.log(err);
            }
            
            // to insert the discount in all the storesIDs of the same chain of markets
            const discount_selector = 'SELECT product.prodID, product.counter, stores.storeID, stores.store_name FROM product INNER JOIN stores ON stores.storeID = product.storeID WHERE stores.store_name = ? AND product.prodID = ?';

            if (result.length > 0) {                
                const currentPrice = result[0].disc_price;                
                if (price < 0.8 * currentPrice) {
                    db.query(discount_selector,[store_name, prodID],(err, result) => {
                        if (err) {
                            console.log("error2.5: No stores found in the chain");
                            return console.log(err);
                        }
                        for (i = 0; i<result.length; i++) {
                            let insertDiscountQuery = `INSERT INTO discount (counter, disc_price, entry_date, entry_by) VALUES (${result[i].counter}, ${price}, NOW(), ${entry_by})`;
                            db.query(insertDiscountQuery, (err, result) => {
                                if (err) {
                                    console.log("error3");
                                    return console.log(err);
                                } else { 
                                    console.log("done");                                  
                                }
                            });
                        }
                        res.redirect("/submit_disc");
                    });
                
                } else {
                    req.session.message = "Discounted price must be less than 20% of the current price.";
                    console.log(req.session.message);
                    res.redirect("/submit_disc");
                }

            } else {               
                if (price < originalPrice) {
                    console.log(prodID);
                    console.log(store_name);
                    db.query(discount_selector, [store_name, prodID], (err, result) => {
                            if (err) {
                                console.log("error2.5 stin else: No stores found in the chain");
                                return console.log(err);
                            }
                            console.log("result= ",result);
                            for (i = 0; i<result.length; i++) {
                                let insertDiscountQuery = `INSERT INTO discount (counter, disc_price, entry_date, entry_by) VALUES (${result[i].counter}, ${price}, NOW(), ${entry_by})`;
                                console.log("inside for loop");
                                db.query(insertDiscountQuery, (err, result) => {
                                    if (err) {
                                        console.log("error3");
                                        return console.log(err);
                                    } else {
                                        console.log("done");
                                    }
                                });
                            }
                            res.redirect("/submit_disc");
                        }
                    );
                } else {
                    req.session.message ="Discounted price must be less than the original price.";
                    console.log(req.session.message);
                    res.rendirect('/submit_disc')
                }
            }    
        });
    });
    console.log('price = ', price);
    console.log('counter = ', counter);
    console.log('original = ', original_price);
    // "node/354449389"
}


exports.update_products = (req,res,next) => {
    const myObj = JSON.parse(req.file.buffer.toString());
        // const myObj = JSON.parse(this.data.toString());
        for (let k = 0; k < (myObj.products.length); k++) {
            db.query('UPDATE product SET original_price = ?, stock=1 WHERE prodID = ?',[myObj.products[k].price,myObj.products[k].id],(error,results)=>{
                        if(error){
                            console.log('error updating product table');
                            console.log(error);
                        }else{
                            console.log('product price updated :) <3 ');
                            // res.redirect("/reviews");
                        }
                    });
        }
        res.send('Data uploaded successfully!');
}

exports.delete_products = (req, res) => {
}

exports.update_pois = (req,res,next) => {
}

exports.delete_pois = (req, res) => {
}
