//this file is gonna just organize all my code to create all the routes for all the different pages that i want
//1. first step we have to import the express js
const express = require('express');
//performing tasks on a particular path is called routing
const router = express.Router();
const mysql = require('mysql');
// app.use(setUser)


router.get('/', (req,res) => {
    res.render('index');
});

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
    console.log(req.session)
    res.render('profile',{user_data: req.session.user_data[0]});
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
    console.log(req.session.user_data[0])
    res.render('reviews', {user_data: req.session.user_data[0]});
})

router.get('/map', (req,res) => {
    res.render('map');
})

router.get('/submit_disc', (req,res) => {
    res.render('submit_disc')    
})

router.get('/statistics', (req,res) => {
    res.render('statistics');
})

router.get('/leaderboard', (req,res) => {
    res.render('leaderboard');
})

router.get('/admin-products', (req,res) => {
    res.render('admin-products');
})

router.get('/admin-poi', (req,res) => {
    res.render('admin-poi');
})

router.get('/edit', (req,res) => {
    const message = req.session.successMessage;
    req.session.successMessage = null;
    res.render('profile-edit', {message: message});
})


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

// Create route to retrieve discounts from database
router.get('/discounts', (req, res) => {

    db.query('SELECT * FROM discount INNER JOIN users ON discount.entry_by = users.userID INNER JOIN product ON product.counter=discount.counter', (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 
    //   this has to change when we fix admin
      else if (req.session.role=='admin') {
        res.json(results);
      }else {
        res.json([results, req.session.user_data[0]]);
        // res.json(results);
      }
    });

})

// Create route to retrieve products and discounts from database
router.get('/products', (req, res) => {

    db.query('SELECT * FROM product', (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 

      db.query('SELECT * FROM discount', (err, rest) => {
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

// Create route to retrieve discounts from database
router.get('/stores', (req, res) => {

    db.query('SELECT * FROM stores INNER JOIN product ON stores.storeID = product.storeID INNER JOIN discount ON product.counter=discount.counter', (error, results) => {
      if (error) {
        res.status(500).send(error);
      } 
    //   this has to change when we fix admin
      else if (req.session.role=='admin') {
        res.json(results);
      }else {
        res.json(results);
        // res.json(results);
      }
    });

})

// Create route to retrieve interactions of user from database
router.get('/user_history', (req, res) => {
    // the following query will give me all the interactions of the user loged in, for the products with counter same as the ones in the interaction table 
    db.query('SELECT * FROM interaction INNER JOIN product ON product.counter = interaction.counter WHERE userID = ?', [req.session.user_data[0].userID], (error, results) => {
      if (error) {
        res.status(500).send(error);

      } else {
        res.json(results);
        // res.json(results);
      }
    });

})

// dbx.end();

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;