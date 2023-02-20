//first import the database in here
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); //to encrypt our passwords
const fs = require('fs'); //to han
const multer = require('multer'); //to handle the uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//start the connection
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// fuction to check password strength:
exports.checkStrength = function (password) {
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

exports.register = (req, res) => {
    console.log(req.body); //req.body is grabbing all the data that we have from the form

    //grab with node js in req.body.xxx via the xxx=name of the input fields of form in register.hbs
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    const { username, email, password, passwordConfirm } = req.body; //this is called desturing and its a shorter way to express the above 

    //start quering into the database
    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => { //use of async bc we use await in case of delays
        if (error) {
            console.log(error); //so i know what is going on
        }

        //meaning that there is already a same email registered
        if (results.length > 0) {

            // return res.render('register', {
            //     message: 'That email is already in use'
            // })
            console.log(req.session);
            req.session.successMessage = 'That email is already in use';
            return res.redirect("/register");
        }
        //check if username is unique
        //bus this account is registered even though i say not to
        db.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
            if (error) {
                console.log(error);
            }

            if (results.length > 0) {
                // return res.render('register', {
                //     message: 'That username is already taken'
                // })
                console.log(req.session);
                req.session.successMessage = 'That username is already taken';
                return res.redirect("/register");
            }
        })



        //last error handling: check if the 2 password fields have equivalent content typed in and if its strong enough
        if (password !== passwordConfirm) {
            // return res.render('register', {
            //     message: 'The passwords do not match'
            // })
            console.log(req.session);
            req.session.successMessage = 'The passwords do not match';
            return res.redirect("/register");
        } else {
            const strength = exports.checkStrength(password);
            if (strength < 4) {
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

        db.query('INSERT INTO users SET ?', { username: username, email: email, password: hashedPassword, register_date: current_date }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(req.session);
                req.session.successMessage = 'User registered. Please login';
                return res.redirect("/login");
            }
        });

    });

    //to hash the password we need to import the bcryptjs
    //we want to handle errors like 1 person with the same email to register 2 times

}


//---- for login -----
exports.login = (req, res) => {
    console.log(req.body);

    const { logname, logpwd } = req.body;
    //start questing into the database

    // check if its a user
    db.query('SELECT password FROM users WHERE BINARY username = ?', [logname], async (error, results) => {
        //error handling
        //----------------------------------------------------------------------
        //!!! prepei na kanw to username case sensitive, diladi to Emma =/= emma
        //----------------------------------------------------------------------
        if (error) {
            console.log(error); //so i know what is the error and i an fix it
        }
        else if (results.length < 1) {
            // check if its admin
            // ...........
            // ...........
            // ...........
            // ...........
            // ...........
            if (logname === process.env.DATABASE_USER && logpwd === process.env.DATABASE_PASSWORD) {
                req.session.authenticated = true;
                req.session.role = "admin";
                req.session.userid = logname;
                req.session.password = logpwd;
                console.log(req.session);
                return res.redirect('/admin')

            } else {
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
                        if (results.length > 0) {
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

exports.updatename = (req, res) => {
    const { username, oldpassword } = req.body;
    console.log(req.body);


    // first check if the username is taken    
    db.query('SELECT username FROM users WHERE username = ?', [username], async (error, results) => {
        if (error) {
            console.log(error);
        }

        if (results.length > 0) {
            console.log(req.session);
            req.session.successMessage = 'That username is already taken';
            req.session.inputData = req.body;
            return res.redirect("/edit");
        }

        //check if the old password is correct
        db.query('SELECT password FROM users WHERE username = ?', [req.session.userid], async (error, results) => {
            if (error) {
                console.log(error); //so i know what is the error and i an fix it
            }

            const comparison = bcrypt.compare(oldpassword, results[0].password, async function (err, result) {
                if (err) {
                    console.log(err);
                }

                // if the old password is correct...
                if (result) {
                    db.query('UPDATE users SET username = ? WHERE username = ?', [username, req.session.userid], async (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('successful update');
                            req.session.userid = username;
                            console.log(req.session);
                            req.session.successMessage = 'You changed your account details successfully';
                            req.session.inputData = null;
                            db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    req.session.user_data = results;
                                    console.log(req.session);
                                    return res.redirect("/profile");
                                }
                            });
                        }
                    });
                } else {
                    console.log(req.session);
                    req.session.successMessage = 'Your current password in incorrect, please try again.';
                    return res.redirect("/edit");
                }
            })
        });
    });
}

exports.updatepass = (req, res) => {
    const { oldpassword, newpassword } = req.body;
    console.log(req.body);

    //check if the old password is correct
    db.query('SELECT password FROM users WHERE username = ?', [req.session.userid], async (error, results) => {
        if (error) {
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

                if (oldpassword == newpassword) {
                    console.log(req.session);
                    req.session.successMessage = 'You cannot use the same password';
                    return res.redirect("/edit");
                } else if (strength < 4) {
                    console.log(req.session);
                    req.session.successMessage = 'The new password is not strong enough';
                    return res.redirect("/edit");
                } else {
                    // successfull update
                    let hashedPassword = await bcrypt.hash(newpassword, 8); //await bc this process of encrypting passwords could take a few seconds more. The default of 8 rounds of hashing should be an ok encryption
                    console.log(hashedPassword);

                    db.query('UPDATE users SET password = ? WHERE username = ?', [hashedPassword, req.session.userid], async (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('successful update');
                            req.session.userid = username;
                            console.log(req.session);
                            req.session.successMessage = 'You changed your account details successfully';
                            req.session.inputData = null;
                            db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    req.session.user_data = results;
                                    console.log(req.session);
                                    return res.redirect("/profile");
                                }
                            });
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

exports.review = (req, res) => {
    console.log(req.session);
    console.log('im inside review auth')
    const counter = parseInt(req.body.product_counter);
    const DiscPrice = parseInt(req.body.disc_price);
    const entry_by = parseInt(req.body.entry_by);
    console.log('entry by userID:', entry_by);
    const interact = parseInt(req.body.interact);



    let current_date = new Date().toJSON();
    console.log("current_date", current_date);
    var month_score;
    db.query('SELECT interaction.counter, userID, price FROM interaction WHERE interaction.counter = ? AND interaction.userID = ?', [counter, req.session.user_data[0].userID], async (error, results) => {
        if (error) {
            console.log(error); //so i know what is the error and i an fix it
        } else if (results.length < 1) {
            console.log(req.session);
            console.log("you can do like");
            db.query('INSERT INTO interaction SET ? ', { price: DiscPrice, userID: req.session.user_data[0].userID, counter: counter, timestamp: current_date, interaction: interact }, (error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Interaction inserted to db');
                    db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            req.session.user_data = results; //update user's session data
                        }
                    });
                }
            });
            db.query('SELECT month_score FROM users WHERE userID = ?', [entry_by], async (error, results) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Users month_score=', results[0].month_score);
                    month_score = results[0].month_score;
                    if (interact === 1) {
                        month_score = month_score + 5;
                    }
                    else if (interact === 0) {
                        if (month_score == 0) {  //user's month score shouldn't be negative
                            month_score = 0;
                        }
                        else {
                            month_score = month_score - 1;
                        }

                    }
                    console.log(month_score);
                    db.query('UPDATE users SET month_score = ? WHERE userID = ?', [month_score, entry_by], (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Users score updated');
                            db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                                if (error) {
                                    console.log(error);
                                } else {
                                    req.session.user_data = results;
                                    res.redirect("/reviews");
                                }
                            });
                        }
                    });
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
    // db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         req.session.user_data = results;
    //     }
    // });
    console.log(req.session);
}


exports.stock = (req, res) => {
    const stock = parseInt(req.body.stock);
    const counter = parseInt(req.body.product_counter);

    if (stock === 1) {
        console.log('stock=', stock);
        db.query('UPDATE product SET stock = 0 WHERE counter = ?', [counter], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Stock set to 0');
                db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        req.session.user_data = results;
                        console.log(req.session);
                        res.redirect("/reviews");
                    }
                });
            }
        });
    } else if (stock === 0) {
        console.log('stock=', stock);
        db.query('UPDATE product SET stock = 1 WHERE counter = ?', [counter], (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Stock set to 1');
                db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        req.session.user_data = results;
                        console.log(req.session);
                        res.redirect("/reviews");
                    }
                });
            }
        });
    }
}


exports.save_discount = (req, res) => {
    console.log('inside save discount\n');
    // Get data from form body
    const price = parseFloat(req.body.disc_price);
    const original_price = parseFloat(req.body.original_price);
    const counter = parseInt(req.body.counter);
    const prodID = parseInt(req.body.prodID);
    const store_name = req.body.store_name;
    const entry_by = req.body.entry_by;

    const storeID = req.session.storeclicked.store.storeID;    
    
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString().slice(0, 19).replace('T', ' ');

    console.log("price =", price);
    console.log("prodID =", prodID);
    console.log("original_price =", original_price);
    console.log('store_name =', store_name);
    console.log('storeID =', storeID);
    console.log("entry by userID=", entry_by);
    console.log("currentTime = ", currentTime);
    console.log("formattedTime = ", formattedTime, "\n");
    let points = 0;

    const checkOriginalPriceQuery = `SELECT original_price FROM product WHERE counter=${counter}`;
    const checkDiscountedPriceQuery = `SELECT disc_price FROM discount  WHERE counter=${counter} ORDER BY entry_date DESC`;
    // SELECT original price
    db.query(checkOriginalPriceQuery, (err, result) => {
        if (err) {
            console.log("error1: No original prices found");
            return console.log(err);
        }
        const originalPrice = result[0].original_price;

        // SELECT discount price
        db.query(checkDiscountedPriceQuery, (err, result) => {
            if (err) {
                console.log("error2: No discount prices found");
                return console.log(err);
            }
            // to insert the discount in all the storesIDs of the same chain of markets
            const discount_selector = 'SELECT product.prodID, product.counter, stores.storeID, stores.store_name FROM product INNER JOIN stores ON stores.storeID = product.storeID WHERE stores.store_name = ? AND product.prodID = ?';

            // If a discount already exists
            if (result.length > 0) {

                //////////////////////////////////////// FOR MEAN YESTERDAY //////////////////////////////////////////////////////// START
                var startOfYesterday = new Date();
                startOfYesterday.setDate(startOfYesterday.getDate() - 1);
                startOfYesterday.setHours(0, 0, 0, 0);
                console.log("startOfYesterday = ", startOfYesterday);

                var endOfYesterday = new Date();
                endOfYesterday.setDate(endOfYesterday.getDate() - 1);
                endOfYesterday.setHours(23, 59, 59, 999);
                console.log("endOfYesterday = ", endOfYesterday);

                let sql1 = `SELECT DISTINCT stores.store_name, product.prodID, product.original_price, COALESCE(discount.disc_price, NULL) AS disc_price 
            FROM stores 
            INNER JOIN product ON product.storeID = stores.storeID 
            LEFT JOIN (
                SELECT counter, disc_price, entry_date 
                FROM discount 
                WHERE entry_date = (
                    SELECT MAX(entry_date) 
                    FROM discount 
                    WHERE counter = discount.counter AND discount.entry_date BETWEEN '${startOfYesterday.toISOString()}' AND  '${endOfYesterday.toISOString()}'
                )
            ) AS discount ON discount.counter = product.counter  
            WHERE product.prodID = ? `;
                let mean_last_day;
                db.query(sql1, [prodID], (err, result1) => {
                    if (err) {
                        console.log("error");
                        return console.log(err);
                    } else {
                        var returned = result1;
                        var paranomasths = returned.length;
                        var arithmiths = 0;
                        for (i = 0; i < paranomasths; i++) {
                            if (returned[i].disc_price === null) {
                                arithmiths += Number(returned[i].original_price);
                            } else {
                                arithmiths += Number(returned[i].disc_price)
                            }
                        }
                        arithmiths = arithmiths.toFixed(2);
                        var mean_price = (arithmiths / paranomasths).toFixed(2);
                        mean_last_day = mean_price;
                        console.log("mean_last_day (yesterday) = ", mean_last_day, "\n");
                    }
                });
                //////////////////////////////////////// FOR MEAN YESTERDAY //////////////////////////////////////////////////////// END
                //////////////////////////////////////// FOR MEAN LAST WEEK //////////////////////////////////////////////////////// START
                var startOfLastWeek = new Date();
                startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);
                startOfLastWeek.setHours(0, 0, 0, 0);
                console.log("startOfLastWeek = ", startOfLastWeek);

                var endOfLastWeek = new Date();
                endOfLastWeek.setDate(endOfLastWeek.getDate() - 1);
                endOfLastWeek.setHours(23, 59, 59, 999);
                console.log("endOfLastWeek = ", endOfLastWeek);

                var startAndEndDates = [];
                for (var i = 0; i < 7; i++) {
                    var start = new Date();
                    start.setDate(start.getDate() - (7 - i));
                    start.setHours(0, 0, 0, 0);
                    var end = new Date();
                    end.setDate(end.getDate() - (7 - i - 1));
                    end.setHours(23, 59, 59, 999);
                    startAndEndDates.push([start, end]);
                }
                let sql2 = `SELECT DISTINCT stores.store_name, product.prodID, product.original_price, COALESCE(discount.disc_price, NULL) AS disc_price 
            FROM stores 
            INNER JOIN product ON product.storeID = stores.storeID 
            LEFT JOIN (
                SELECT counter, disc_price, entry_date 
                FROM discount 
                WHERE counter = discount.counter AND discount.entry_date BETWEEN '${startOfLastWeek.toISOString()}' AND  '${endOfLastWeek.toISOString()}'
            ) AS discount ON discount.counter = product.counter  
            WHERE product.prodID = ? `;
                var week_means = [];
                let mean;
                for (var j = 0; j < startAndEndDates.length; j++) {
                    db.query(sql2, [prodID, startAndEndDates[j][0], startAndEndDates[j][1]], (err, result2) => {
                        if (err) {
                            console.log("error");
                            return console.log(err);
                        } else {
                            var returned = result2;
                            var paranomasths = returned.length;
                            var arithmiths = 0;
                            for (i = 0; i < paranomasths; i++) {
                                if (returned[i].disc_price === null) {
                                    arithmiths += Number(returned[i].original_price);
                                } else {
                                    arithmiths += Number(returned[i].disc_price)
                                }
                            }
                            arithmiths = arithmiths.toFixed(2);
                            var mean_price = (arithmiths / paranomasths).toFixed(2);
                            const mean_last_week = mean_price;
                            week_means.push(mean_last_week);
                        }
                        let sum = 0;
                        for (let i = 0; i < week_means.length; i++) {
                            sum += Number(week_means[i]);
                        }
                        mean = (sum / week_means.length).toFixed(2);
                        console.log("mean of last week = ", mean);
                    });
                }
                //////////////////////////////////////// FOR MEAN LAST WEEK //////////////////////////////////////////////////////// END
                
                const currentPrice = result[0].disc_price;
                if (price < 0.8 * currentPrice) {
                    db.query(discount_selector, [store_name, prodID], (err, result) => {
                        if (err) {
                            console.log("error2.5: No stores found in the chain");
                            return console.log(err);
                        };
                        for (i = 0; i < result.length; i++) {
                            let insertDiscountQuery = `INSERT INTO discount (counter, disc_price, entry_date, entry_by) VALUES (${result[i].counter}, ${price}, STR_TO_DATE('${formattedTime}', '%Y-%m-%d %H:%i:%s'), ${entry_by})`;
                            db.query(insertDiscountQuery, (err, result) => {
                                if (err) {
                                    console.log("error3");
                                    return console.log(err);
                                } else {
                                    console.log("done");
                                    ///////////// new for score
                                    db.query('SELECT month_score FROM users WHERE userID = ?', [entry_by], async (error, results) => {
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log('Users month_score=', results[0].month_score);
                                            month_score = results[0].month_score;
                                            let check_week = 0;
                                            let check_yesterday = 0;
                                            if (price < 0.8 * mean_last_day) {
                                                check_yesterday = price;
                                                console.log("check_yesterday = ", check_yesterday);
                                                month_score = month_score + 50;
                                                points = 50;
                                                console.log('Users new month_score=', month_score);
                                            } else if (price < 0.8 * mean) {
                                                check_week = price;
                                                console.log("check_week = ", check_week);
                                                month_score = month_score + 20;
                                                points = 20;
                                                console.log('Users new month_score=', month_score);
                                            }
                                        }
                                        db.query('UPDATE users SET month_score = ? WHERE userID = ?', [month_score, entry_by], (error, results) => {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                console.log('Users score updated');
                                                db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                                                    if (error) {
                                                        console.log(error);
                                                    } else {
                                                        req.session.user_data = results;
                                                    }
                                                });
                                            }
                                        });
                                    });
                                    ///////////// new for score
                                }
                            });
                        }
                        req.session.message2 = "Congratulations! Your discount has submitted successfully.";
                        console.log(req.session);
                        res.redirect("/submit_disc");
                    });
                }
                else {
                    req.session.message = "Discounted price must be less than 20% of the current price.";
                    console.log(req.session.message);
                    res.redirect("/submit_disc");
                }
            }
            else {
                if (price < originalPrice) {
                    console.log(prodID);
                    console.log(store_name);
                    db.query(discount_selector, [store_name, prodID], (err, result) => {
                        if (err) {
                            console.log("error2.5 stin else: No stores found in the chain");
                            return console.log(err);
                        }
                        console.log("result= ", result);
                        for (i = 0; i < result.length; i++) {
                            let insertDiscountQuery = `INSERT INTO discount (counter, disc_price, entry_date, entry_by) VALUES (${result[i].counter}, ${price}, STR_TO_DATE('${formattedTime}', '%Y-%m-%d %H:%i:%s'), ${entry_by})`;
                            console.log("inside for loop");
                            db.query(insertDiscountQuery, (err, result) => {
                                if (err) {
                                    console.log("error3");
                                    return console.log(err);
                                } else {
                                    console.log("done");
                                    ///////////// new for score
                                    db.query('SELECT month_score FROM users WHERE userID = ?', [entry_by], async (error, results) => {
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            console.log('Users month_score=', results[0].month_score);
                                            month_score = results[0].month_score;
                                            month_score = month_score + 10;
                                            points = 10;
                                            console.log('Users new month_score=', month_score);
                                            db.query('UPDATE users SET month_score = ? WHERE userID = ?', [month_score, entry_by], (error, results) => {
                                                if (error) {
                                                    console.log(error);
                                                } else {
                                                    console.log('Users score updated');
                                                    db.query('SELECT * FROM users WHERE userID = ?', [req.session.user_data[0].userID], async (error, results) => {
                                                        if (error) {
                                                            console.log(error);
                                                        } else {
                                                            req.session.user_data = results;
                                                        }
                                                    });
                                                    //res.redirect("/reviews");
                                                }
                                            });
                                        }
                                    });
                                    //
                                    ///////////// new for score
                                }
                            });
                        }
                        req.session.message2 = "Congratulations! Your discount has submitted successfully.";
                        console.log(req.session);
                        // req.session.points = points;
                        res.redirect("/submit_disc");
                    }
                    );
                } else {
                    req.session.message = "Discounted price must be less than the original price.";
                    console.log(req.session.message);
                    res.redirect('/submit_disc')
                }
            }
        });
    });
    console.log('price = ', price);
    console.log('counter = ', counter);
    console.log('original = ', original_price);
}


// for admin
exports.update_products = (req, res) => {
    // middleware (like multer) are functions that have access to the request and response objects
    // When a file is uploaded using a form, multer can parse the form data and store the file in a designated location on the server.

    // req.file: info about the uploaded file (name,type,buffer with file contents)
    // toString(): Buffer object -> string
    // JSON.parse(): JSON string -> js object
    var myObjArr = JSON.parse(req.file.buffer.toString());
    const myObjArray = myObjArr.products;
    //console.log(myObjArray);
    console.log("parsed json");

    // Check if the product table is empty or not.
    db.query('SELECT COUNT(*) as count FROM product', (err, result) => {
        if (err) {
            console.log("error: i dont know if the product table is empty or not");
            return console.log(err);
        }
        // result: array of result rows returned by the query
        //console.log("result = ", result);
        //console.log("result[0] = ", result[0]);
        // If the table prduct is empty
        if (result[0].count === 0) {
            console.log('The table is empty');
            // Fetch storeID from stores 
            const StoresSelector = 'SELECT storeID from stores';
            db.query(StoresSelector, (err, result) => {
                if (err) {
                    console.log("error3");
                    return console.log(err);
                } else {
                    db.query('ALTER TABLE product AUTO_INCREMENT = 1', (error, results) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        console.log("counter set to 1");
                    });
                    // Insert the data myObjArray into product table
                    let sql = 'INSERT INTO product (prodID, subID, product_name, storeID, original_price, stock, image_link) VALUES';
                    let values = [];
                    console.log("result = ", result);
                    // result.map(): transform each element in an array
                    const storeIds = result.map(result => result.storeID);
                    console.log("selected storeIDs= ", storeIds);
                    for (let k = 0; k < storeIds.length; k++) {
                        for (let i = 0; i < myObjArray.length; i++) {
                            const myObj = myObjArray[i];
                            sql += `(?, ?, ?, ?, ?, ?, ?),`;
                            values.push(myObj.id, myObj.subcategory, myObj.name, storeIds[k], myObj.price, 1, myObj.image);
                        }
                    }
                    sql = sql.slice(0, -1);
                    // The ON DUPLICATE KEY UPDATE clause is used to update the existing rows in the product table with new data.
                    sql += `ON DUPLICATE KEY UPDATE prodID = VALUES(prodID), subID = VALUES(subID), product_name = VALUES(product_name), storeID = VALUES(storeID), original_price = VALUES(original_price), stock = 1, image_link = VALUES(image_link); `;
                    db.query(sql, values, (error, results) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        console.log("good");
                        res.redirect('/admin-products');
                    });
                }
            });
            //  If the product table is not empty
        } else {
            console.log('The table is not empty');
            // Update  original_price and stock for the existing products in the table.
            for (let k = 0; k < (myObjArr.products.length); k++) {
                db.query('UPDATE product SET original_price = ?, stock=1 WHERE prodID = ?', [myObjArr.products[k].price, myObjArr.products[k].id], (error, results) => {
                    if (error) {
                        console.log('error updating product table');
                        console.log(error);
                    } else {
                        console.log('product price updated :) <3 ');
                    }
                });
            }
            console.log('Data updated successfully!');
            req.session.message = "Product Data updated successfully! ";
            res.redirect('/admin-products');
        }
    });
}

// for admin
exports.delete_products = (req, res) => {

    db.query('DELETE FROM product', (err, result) => {
        if (err) {
            console.log("Product data could not be deleted :(( ");
            console.log(err);
        } else {
            console.log("Product data deleted !!!!!!! ");
            res.redirect('/admin-products')
        }
    });
}

// for admin
exports.update_pois = (req, res) => {
    var myObjStr = JSON.parse(req.file.buffer.toString());
    const myObjStores = myObjStr[2].data;
    console.log("myObjStr = ", myObjStr);
    console.log(myObjStores);
    console.log("parsed json");

    let sql = 'INSERT INTO stores (storeID, store_name, store_latitude, store_longtitude, store_type, disc_weekday) VALUES';
    let values = [];

    // Loop through the entries in the JSON file
    for (let i = 0; i < myObjStores.length; i++) {
        const myObjS = myObjStores[i];
        sql += `(?, ?, ?, ?, ?, ?),`;
        values.push(myObjS.storeID, myObjS.store_name, myObjS.store_latitude, myObjS.store_longtitude, myObjS.store_type, myObjS.disc_weekday);
    }
    sql = sql.slice(0, -1);
    sql += `ON DUPLICATE KEY UPDATE storeID = VALUES(storeID),store_name = VALUES(store_name), store_latitude = VALUES(store_latitude), store_longtitude = VALUES(store_longtitude), store_type = VALUES(store_type), disc_weekday = VALUES(disc_weekday); `;
    console.log("-------------------", sql);
    db.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log("good");
        // res.send('Data uploaded successfully!');
        console.log('Data updated successfully!');
        req.session.message = "POI Data updated successfully! ";
        res.redirect('/admin-poi');
    });

    // db.query(
    //     'INSERT INTO stores (storeID, store_name, store_latitude, store_longtitude, store_type, disc_weekday) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE store_name = VALUES(store_name), store_latitude = VALUES(store_latitude), store_longtitude = VALUES(store_longtitude), store_type = VALUES(store_type), disc_weekday = VALUES(disc_weekday);', (err, result) => {
    //         if (err) {
    //             console.log("OUPS !");
    //             console.error(err);
    //             return;
    //         } else {
    //             console.log('Inserted/updated entry: ${entry}');
    //         }
    //     });
}

// for admin
exports.delete_pois = (req, res) => {
    db.query('DELETE FROM stores', (err, result) => {
        if (err) {
            console.log("Store data could not be deleted :(( ");
            console.log(err);
        } else {
            console.log("Store data deleted :O whyyyy houman? ");
            res.redirect('/admin-poi')
        }
    });
}

// for admin
exports.delete_discount = (req, res) => {
    const id_disc = parseInt(req.body.id_disc);
    db.query('DELETE FROM discount WHERE discount.id_disc = ?', [id_disc], (err, result) => {
        if (err) {
            console.log("Discount could not be deleted :(( ");
            console.log(err);
        } else {
            console.log("Discount deleted :O whyyyy houman? ");
            res.redirect('/admin-review')
        }
    });
}