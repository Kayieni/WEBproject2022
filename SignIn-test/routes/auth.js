const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

//access only by POST method
//we dont want to render but we want to create a controller that will be able to deal with all the data from the form
router.post('/register', authController.register);

//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;