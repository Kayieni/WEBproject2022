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
    console.log(req.session.user_data[0]);
    console.log("=========", req.session.storeclicked.store.storeID);
    res.render('reviews', {user_data: req.session.user_data[0], storeclicked: req.session.storeclicked.store});
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
  let message = req.session.message;
  req.session.message = null;
  res.render("submit_disc", { message: message });
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

// Create route to retrieve discounts to appear on the stores from database
router.get('/discounts', (req, res) => {
  //all the discounts of the selected store after submit button
    db.query('SELECT discount.*, users.*, product.* FROM discount INNER JOIN users ON discount.entry_by = users.userID INNER JOIN product ON product.counter=discount.counter WHERE storeID = ? AND discount.entry_date = (SELECT MAX(entry_date) FROM discount WHERE discount.counter = product.counter) GROUP BY discount.counter ORDER BY discount.entry_date DESC', [req.session.storeclicked.store.storeID], (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 
      // this has to change w hen we fix admin
      else if (req.session.role=='admin') {
      res.json(results);
      }else {
        // console.log(results[0].counter);
        res.json([results, req.session.user_data[0], req.session.storeclicked]);
        // res.json(results);
      }
    });

})

// Create route to retrieve products and discounts of a store selected from database
router.get('/products', (req, res) => {

    db.query('SELECT product.* , stores.store_name FROM product JOIN stores WHERE stores.storeID = product.storeID', (error, results) => {
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

// Create route to retrieve interactions of user from database
router.get('/user_history', (req, res) => {
    // the following query will give me all the interactions of the user loged in, for the products with counter same as the ones in the interaction table 
    db.query('SELECT * FROM interaction INNER JOIN product ON product.counter = interaction.counter WHERE userID = ? ORDER BY interaction.timestamp DESC', [req.session.user_data[0].userID], (error, results) => {
      if (error) {
        res.status(500).send(error);

      } 

      db.query('SELECT discount.*, product.*, stores.store_name, stores.storeID FROM discount INNER JOIN product ON product.counter = discount.counter INNER JOIN stores ON product.storeID = stores.storeID WHERE entry_by = ? GROUP BY product.prodID, discount.disc_price ORDER BY `discount`.`entry_date` DESC;',[req.session.user_data[0].userID], (err, rest) => {
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
  db.query('SELECT * FROM users ORDER BY users.total_score DESC', (error, results) => {
    //  WHERE total_score > 0
    if (error) {
      res.status(500).send(error);

    }else {
      res.json(results);
    }
  })
})

router.get('/charts',(req,res)=>{
  // the following query will give me all the data needed for the charts
  const chartsdata = 'SELECT discount.*, product.prodID, stores.storeID, stores.store_name FROM discount INNER JOIN product ON product.counter=discount.counter INNER JOIN stores ON stores.storeID=product.storeID';
  db.query(chartsdata, (error, results) => {
    // 
    if (error) {
      res.status(500).send(error);

    }else {
      res.json(results);
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