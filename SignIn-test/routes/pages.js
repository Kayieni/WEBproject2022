//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const express = require('express');
//performing tasks on a particular path is called routing
const router = express.Router();
const mysql = require('mysql');
// app.use(setUser)


router.get('/', (req,res) => {
    res.render('login');
});

router.get('/admin-review', (req,res) => {
  let message = req.session.message;
  req.session.message = null;
  res.render('admin-review', { message: message, storeclicked: req.session.storeclicked.store });
});
router.post('/admin-review', (req,res) => {
  let id = req.body.storeID;
  let name = req.body.storeName;
  // let type = req.body.storeType;
  let store = req.body.storeclicked;
  req.session.storeclicked = { store };
  console.log(req.session);
  res.redirect('/admin-review');
})
router.get('/register', (req,res) => {
    const message = req.session.successMessage;
    console.log(req.session);
    req.session.successMessage = null;
    res.render('register', {message: message});
});

router.get('/login', (req,res) => {
    if(req.session.successMessage){
        const message = req.session.successMessage;
        console.log(req.session);
        req.session.successMessage = null;
        res.render('login', {message: message});
    } else {
        res.render('login');
    }
})

router.get('/welcome', (req,res) => {
    // checkAuth up there    
    const username = req.session.userid;
    console.log(req.session);
    res.render('welcome',{user: username});
});

router.get('/profile', (req,res) => {
    const username = req.session.user_data[0].username;
    console.log(req.session)
    res.render('profile',{user_data: req.session.user_data[0], user: username});
})

router.get('/logout', (req,res) => {
    console.log(req.session);
    req.session.destroy(function(err) {
        if(err) {
            //An error occurred while destroying the session
            console.log(err);
            res.send('Error logging out');
        }else {
            //The session was successfully destroyed, redirect the user to the login page
            // res.clearCookie('connect.sid');
            console.log('Session killed!');
            console.log(req.session);
            res.redirect('login');
        }
    });
})


router.get('/admin', (req,res) => {
    // checkAuth up there
    // console.log('Admin Page');
    res.render('admin');
})

router.get('/reviews', (req,res) => {
    // checkAuth up there
    const username = req.session.user_data[0].username;
    console.log(req.session.user_data[0]);
    console.log("=========", req.session.storeclicked.store.storeID);
    res.render('reviews', {user_data: req.session.user_data[0], storeclicked: req.session.storeclicked.store, user: username});
})

router.get('/map', (req,res) => {
    res.render('map');
})

router.post('/submit_disc', (req,res) => {
    let id = req.body.storeID;
    let name = req.body.storeName;
    // let type = req.body.storeType;
    let store = req.body.storeclicked;
    req.session.storeclicked = { store };
    console.log(req.session);
    res.redirect('/submit_disc');
    
})

router.get('/submit_disc', (req,res) => {
  const username = req.session.user_data[0].username;
  let message = req.session.message;
  let message2 = req.session.message2;
  //let extra_score = req.session.points;
  console.log(req.session);
  //req.session.points = null;
  req.session.message = null;
  req.session.message2 = null;
  res.render("submit_disc", { message: message, storeclicked: req.session.storeclicked.store, message2: message2, user: username});
})

router.get('/statistics', (req,res) => {
    res.render('statistics');
})

router.get('/leaderboard', (req,res) => {
    res.render('leaderboard');
})

router.get('/admin-products', (req,res) => {
    var message = req.session.message;
    req.session.message = null; 
    res.render('admin-products', {message: message});
})

router.get('/admin-poi', (req,res) => {
    var message = req.session.message;
    req.session.message = null; 
    res.render('admin-poi', {message: message});
})

router.get('/edit', (req,res) => {
    const username = req.session.user_data[0].username;
    const message = req.session.successMessage;
    req.session.successMessage = null;
    res.render('profile-edit', {message: message, user: username});
})


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Create route to retrieve discounts to appear on the stores from database
router.get('/discounts', (req, res) => {
  //all the discounts of the selected store after submit button
    db.query('SELECT discount.*, users.*, product.* FROM discount INNER JOIN users ON discount.entry_by = users.userID INNER JOIN product ON product.counter=discount.counter WHERE storeID = ? AND discount.entry_date = (SELECT MAX(entry_date) FROM discount WHERE discount.counter = product.counter) GROUP BY discount.counter ORDER BY discount.entry_date DESC', [req.session.storeclicked.store.storeID], (error, results) => {
      if (error) {
        res.status(500).send(error);

      } else {
        db.query('SELECT interaction.*, discount.id_disc, product.counter FROM interaction INNER JOIN discount ON discount.counter = interaction.counter INNER JOIN product ON product.counter=discount.counter WHERE storeID = ?', [req.session.storeclicked.store.storeID], (err, rest) => {
          if (err) {
            res.status(500).send(err);
            
          }else if (req.session.role=='admin') {
          // this has to change w hen we fix admin
          res.json([results, req.session.role, req.session.storeclicked]);
          }else {
            // console.log(results[0].counter);
            res.json([results, req.session.user_data[0], req.session.storeclicked, rest]);
            // res.json(results);
          }
        });
      }
    });
})

// Create route to retrieve products and discounts of a store selected from database
router.get('/products', (req, res) => {

    db.query('SELECT product.* , stores.store_name, COALESCE(discount.disc_price, NULL) AS disc_price FROM product  INNER JOIN stores ON product.storeID = stores.storeID LEFT JOIN discount ON discount.counter = product.counter ', (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 

      db.query('SELECT * FROM discount', (err, rest) => {
        if (err) {
          res.status(500).send(err);
        }else if (req.session.role=='admin') {
          res.json(results,rest);
        }else {
          res.json([results, rest, req.session.user_data[0], req.session.storeclicked]);
        }
      });
    });
})

// Create route to retrieve categories and subcategories from database
router.get('/sub-categories', (req, res) => {

    db.query('SELECT * FROM categories', (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 

      db.query('SELECT * FROM subcategories', (err, rest) => {
        if (err) {
          res.status(500).send(err);
        }else if (req.session.role=='admin') {
          res.json(results,rest);
        }else {
          res.json([results, rest, req.session.user_data[0]]);
        }
      });
    });

})

// Create route to retrieve stores from database
router.get('/stores', (req, res) => {
    
    // db.query('SELECT * FROM stores INNER JOIN product ON stores.storeID = product.storeID INNER JOIN discount ON product.counter=discount.counter', (error, results) => {
    db.query('SELECT * FROM stores', (error, results) => {
      if (error) {
        res.status(500).send(error);
      } 
    //   this has to change when we fix admin
      else if (req.session.role=='admin') {
        res.json([results, req.session.role]);
      }else {
        res.json([results, req.session.role]);
        // res.json(results);
      }
    });

})


// Create route to retrieve discounted stores from database //// Discount store only if it has a discount the past 7 days 
router.get('/disc_stores', (req, res) => {
   db.query('SELECT DISTINCT stores.storeID, stores.store_name, stores.store_longtitude, stores.store_latitude FROM stores INNER JOIN product ON stores.storeID = product.storeID INNER JOIN discount ON product.counter=discount.counter  WHERE discount.entry_date >= DATE_SUB(NOW(), INTERVAL 7 DAY)', (error, results) => {
  //db.query('SELECT * FROM stores', (error, results) => {
    if (error) {
      res.status(500).send(error);
    } 
  //   this has to change when we fix admin
    else if (req.session.role=='admin') {
      res.json([results, req.session.role]);
    }else {
      res.json([results, req.session.role]);
      // res.json(results);
    }
  });

})

// Create route to retrieve interactions and submissions of user from database
router.get('/user_history', (req, res) => {
    // the following query will give me all the interactions of the user loged in, for the products with counter same as the ones in the interaction table 
    db.query('SELECT * FROM interaction INNER JOIN product ON product.counter = interaction.counter WHERE userID = ? ORDER BY interaction.timestamp DESC', [req.session.user_data[0].userID], (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 

      db.query('SELECT discount.*, product.*, stores.store_name, stores.storeID FROM discount INNER JOIN product ON product.counter = discount.counter INNER JOIN stores ON product.storeID = stores.storeID WHERE entry_by = ? GROUP BY product.prodID, discount.disc_price, discount.entry_date ORDER BY discount.`entry_date` DESC;',[req.session.user_data[0].userID], (err, rest) => {
        if (err) {
          res.status(500).send(err);
        }else if (req.session.role=='admin') {
          res.json(results,rest);
        }else {
          res.json([results, rest, req.session.user_data[0]]);
        }
      });
    });

})

router.get('/userslead', (req, res) => {
  // the following query will give me all the interactions of the user loged in, for the products with counter same as the ones in the interaction table 
  db.query('SELECT * FROM users WHERE total_score > 0 ORDER BY users.total_score DESC', (error, results) => {
     
    if (error) {
      res.status(500).send(error);

    }else {
      res.json(results);
    }
  })
})


router.get('/charts',(req,res)=>{
  // the following query will give me all the data needed for the charts
  // it returns all the data of the discounts, with the product ID related to it, and the store name and id related to it
  const chartsdata = 'SELECT discount.*, product.prodID, product.subID, stores.storeID, stores.store_name FROM discount INNER JOIN product ON product.counter=discount.counter INNER JOIN stores ON stores.storeID=product.storeID';
  const discs_unique = 'SELECT discount.*, product.*, stores.store_name, stores.storeID FROM discount INNER JOIN product ON product.counter = discount.counter INNER JOIN stores ON product.storeID = stores.storeID GROUP BY product.prodID, discount.disc_price, discount.entry_by, discount.entry_date ORDER BY discount.`entry_date` DESC;';
  const categories = 'SELECT * FROM categories';
  const subcategories = 'SELECT * FROM subcategories';

  db.query(discs_unique, (error, discs) => {
    // 
    if (error) {
      res.status(500).send(error);

    }else {
      db.query(categories, (err,cats) => {
        if (err) {
          res.status(500).send(err);
        }else {
          db.query(subcategories, (er,subcats) => {
            if (er) {
              res.status(500).send(er);
            } else {
                res.json({discs,cats,subcats});
            }
          })
        }
      })
    }
  })
})

router.get('/searchbar',(req,res)=>{
  // the following query will give me all the data needed for the charts
  const chartsdata = 'SELECT categories.category_name, discount.counter, stores.store_longtitude, stores.store_latitude FROM stores  JOIN product ON stores.storeID = product.storeID   JOIN subcategories ON product.subID = subcategories.subID   JOIN categories ON subcategories.catID = categories.catID   JOIN discount ON product.counter = discount.counter WHERE discount.entry_date >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
  db.query(chartsdata, (error, results) => {
    // 
    if (error) {
      res.status(500).send(error);

    }else {
      res.json(results);
    }
  })
})
// dbx.end();

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;

router.get('/endMonth', (req, res) => {
  const cron = require('node-cron');
  const mysql = require('mysql2');

  // Schedule a task to run at the end of each month
  // cron.schedule('0 0 28 * *', () => {
  cron.schedule('* * * * *', () => {
    // Calculate the total number of users
    db.query(`SELECT COUNT(*) as total_users FROM users`, (error, results) => {
      if (error) throw error;
      const totalUsers = results[0].total_users;
      console.log("1. Calculated the total number of users : totalUsers = ", totalUsers);

      // Calculate the total month_score
      db.query(`SELECT SUM(month_score) as total_month_score FROM users`, (error, results) => {
        if (error) throw error;
        const totalMonthScore = results[0].total_month_score;
        console.log("2. Calculated the total month_score : totalMonthScore = ", totalMonthScore);

        // Share the 80% of 100 * @total_users tokens based on month_score
        db.query(`UPDATE users SET month_tokens = (0.8 * 100 * ${totalUsers} * month_score) / ${totalMonthScore}`, (error) => {
          if (error) throw error;
          console.log("3. Shared the 80% of 100 * @total_users tokens based on month_score ");

          // Add the month_score to the total_score and set month_score to 0
          db.query(`UPDATE users SET total_score = total_score + month_score, month_score = 0`, (error) => {
            if (error) throw error;
            console.log("4. Added the month_score to the total_score and set month_score to 0 ");


            // Add the month_tokens to the total_tokens and set month_tokens to 0
            db.query(`UPDATE users SET total_tokens = total_tokens + month_tokens, month_tokens = 0`, (error) => {
              if (error) throw error;
              console.log("5. Added the month_tokens to the total_tokens and set month_tokens to 0 ");

            });
          });
        });
      });
    });
  });
})

router.get('/startMonth', (req, res) => {
  const cron = require('node-cron');
  const mysql = require('mysql2');
  // cron.schedule('0 0 1 * *', () => {
  cron.schedule('* * * * *', () => {
    // Set the month_tokens for all users to 100
    db.query(`UPDATE users SET month_tokens = 100`, (error, results) => {
      if (error) {
        console.log("error: Can set the month_tokens for all users to 100");
        return console.log(error);
      } else {
        console.log("Set the month_tokens for all users to 100  ");
      }
    });
  });
})