//first of all install a couple of dependances that we need
//the base minimum to start a node.js project
//if we use nodemon the server will restart automatically otherwise everytime we make changes to this .js file we have to stop the server and restart it again
const nodemon = require('nodemon');
const express = require("express"); //to make sure we restart our server from node.js
const path = require('path'); //we dont need to install it cause it comes by default from node.js
const mysql = require("mysql"); //install mysql
const dotenv = require('dotenv'); //we already installed it with npm
const exp = require("constants");
dotenv.config({ path: './.env'}); //here we tell where is the file

const app = express(); //to make sure that we start the server (it is up)


//start the database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, //if we have server here we can put the IP of it
    user: process.env.DATABASE_USER, //xampp default
    password: process.env.DATABASE_PASSWORD, //xampp default
    //at this point we create a database in localhost/phpmyadmin named at mentioned bellow
    database: process.env.DATABASE //xampp name of database we want to use
    //but all that data are obvious and unprotected. To protect the we create the .env file for our sensitive passwords of the environment
    //so now instead of having database: 'web-login', we have this
});

//we also installed a dependancy called hbs for handlebars
//to use this we need to set up some things

const publicDirectory =  path.join(__dirname, './public'); //files like css or any js for frontend files we might want to use
//console.log(__dirname);
//__dirname is a default variable from node.js that gives you access to the current directory where you are
//now we make sure express is being used
app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms) 
app.use(express.urlencoded({ extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//also here, to use the variable 'path' we actually need to import this at the beginning because this is a part of node.js
app.set('view engine', 'hbs');
//now we create a folder named views which is a default name for handlebars


//now we actually need to connect it
db.connect( (error) => {
    if(error) {
        console.log(error)//so if anything goes wrong with the connection or we typed wrong data above, the appropriate error will appear
    } else {
      console.log("MYSQL Connected...")  
    
    }//and if everything is ok with the connection, this message will appear in the terminal
})
//so now our application in node.js is actually connected to the database we just created in phpmyadmin


//----------------------------
//Defire Routes
app.use('/', require('./routes/pages')); //no need again to write the .js ending of the file
app.use('/auth',require('./routes/auth'));

//what kind of port we want to listen to
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})

