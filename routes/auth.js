const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

const multer = require('multer'); 
const storage = multer.memoryStorage(); // sets up a storage engine for Multer that stores the uploaded files in memory as Buffer objects rather than saving them to disk.
const upload = multer({ storage: storage }); // creates an instance of Multer using the memory storage engine defined in the previous line. This instance can be used as middleware to handle file uploads.





//performing tasks on a particular path is called routing

//access only by POST method
//we dont want to render but we want to create a controller that will be able to deal with all the data from the form
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/updatename', authController.updatename);
router.post('/updatepass', authController.updatepass);
router.post('/review', authController.review);
router.post('/stock', authController.stock);
router.post('/save_discount', authController.save_discount);
router.post('/update_products', upload.single('file'), authController.update_products);
router.post('/delete_products', authController.delete_products);
router.post('/update_pois', upload.single('file'), authController.update_pois);
router.post('/delete_pois', authController.delete_pois);
router.post('/delete_discount', authController.delete_discount);


//with this command in node we can create a new module
//to ensure that we can export this "router" that we created and we are giving it to our pages. So we need to export it
module.exports = router;

// ============ exports ===========
//module.exportsQ exposes the object it points to.
//exports: exposes the properties of the module it points to