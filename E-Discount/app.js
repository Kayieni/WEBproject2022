// ======= MVC Architecture ==============


//also known as: server.js
//this file is mainly about the host/ server in http

//first of all install a couple of dependances that we need
//the base minimum to start a node.js project
//if we use nodemon the server will restart automatically otherwise everytime we make changes to this .js file we have to stop the server and restart it again
const express = require("express"); //to make sure we restart our server from node.js
const path = require('path'); //we dont need to install it cause it comes by default from node.js
const mysql = require("mysql"); //install mysql
const dotenv = require('dotenv'); //we already installed it with npm  
const session = require('express-session');
const cookieParser = require('cookie-parser');
const {v4:uuidv4} = require('uuid');
var MySQLSessionStore = require('express-mysql-session')(session); // for session storeage

//const MySQLStore = require('connect-mysql2')(session);

dotenv.config({ path: './.env'}); //here we tell where is the file

//for http server
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

/* ==== Serving static files in Node ==== */

//we also installed a dependancy called hbs for handlebars
//to use this we need to set up some things

//files like css or any js for frontend files we might want to use 
// basically the front end in ./public
const publicDirectory =  path.join(__dirname, './public'); 
//also here, to use the variable 'path' we actually need to import this at the beginning because this is a part of node.js
//__dirname is a default variable from node.js that gives you access to the current directory where you are
//now we make sure express is being used
//now we access all the static files in the public folder
app.use(express.static(publicDirectory));
// τσέκαρε αν το req χρειάζεται κατι απο το public dir και αν ναι : res
//----- alternative for the static files
/*
const publicpath = path.resolve(__dirname,'public')
app.use(publicpath,express.static('static')); //given that static is a subfolder of "public" folder that includes the images
<img src="public/imgname.jpg"></img>
app.get('/',function(req,res){
    res.send(`Static Files`);
})
*/


//=====parsing the incoming data======
//Parse URL-encoded bodies (as sent by HTML forms) 
app.use(express.urlencoded({ extended: true}));
//Parse JSON bodies (as sent by API clients)
//middleware to read req.body.<params>
app.use(express.json());

//engine to generate dynamic html file
app.set('view engine', 'hbs'); //instead of hbs, pug is common too
//now we create a folder named views which is a default name for handlebars
//folders "views" has default name
//if i want to change the name of that folder i need to include the following line of code
/*
app.set('views','./newname")
*/

//=========Set the Cookie-parser========
//Define Cookie-parser usage so that the server can access the necessary option to save, read and access a cookie.
//app.use(cookies);
//====== session setup =======
var sessionStore = new MySQLSessionStore({
    host: process.env.DATABASE_HOST,    
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
},db);
const aday = 1000*60*60*24; //a day in milliseconds
//src: https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore, // to store the session in the database
    // rolling: false, if i want the session to expire in the maxAge, regardless the activity of the user
    resave: false, // default value: true. Set to false in order for the session to be destroyed
    saveUninitialized: false, // default value: true. Set to false in order for the session to be destroyed
    cookie: {maxAge: aday}
}))

// now, after visiting any route of the website, the will be a cookie set in the httprequest header, that will be equilanant to the sessions stored above, in the database

//To initialize the session, we will set the session middleware inside the routes of the individual HTTP requests.
//When a client sends a request, the server will set a session ID and set the cookie equal to that session ID. The cookie is then stored in the set cookie HTTP header in the browser. Every time the browser (client) refreshes, the stored cookie will be a part of that request.

//=======set the cookie parser middleware ====
// app.use(cookieParser());


function checkAuthenticated (req, res, next) {
    if (req.session.authenticated && (req.session.role == "user")) {
        console.log("from checkAuth app.js");
        next();
    } else {
        req.session.successMessage = "Not authendicated. Login Again.";
        res.redirect('/logout');
    }
}

// User pages that need authendication
app.use('/welcome', checkAuthenticated);
app.use('/profile', checkAuthenticated);
app.use('/reviews', checkAuthenticated);
app.use('/edit', checkAuthenticated);
// app.use('/map', checkAuthenticated);


function checkAuthAdmin (req, res, next) {
    if (req.session.authenticated && (req.session.role == "admin")){
        console.log("from checkAdmin app.js");
        next();
    } else {
        req.session.successMessage = "Not authendicated. Login Again.";
        res.redirect('/logout');
    }
}

// Admin pages that need authendication
app.use('/admin', checkAuthAdmin);
app.use('/statistics', checkAuthAdmin);
app.use('/leaderboard', checkAuthAdmin);
app.use('/admin-poi', checkAuthAdmin);
app.use('/admin-products', checkAuthAdmin);
// app.use("/map", checkAuthenticated);


/* ==== Connect with mySQL Database ====*/

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

// app.use('/admin',require('./routes/admin'));
app.use('/', require('./routes/pages')); //no need again to write the .js ending of the file
// app.use('/dragdrop',require('./routes/dragdrop'));
app.use('/auth',require('./routes/auth'));

//so everytime i get something in http, i send something else
//this is handled by the ./routes/pages.js file

//---------------------------------------------
//a sample mini project using express to create an http server instead of node http server code: 
/*
const express = require("express")
const app = express();

//this function (or you can say: this method...) tells what to do when get request at the given route is called
app.get("/ping",(req,res) => {
    res.send("Pong")
});
//so when you type ping in the blowser url, this will execute the above callback function and return this responce message.

//by using this app.listen, im gonna listen my server at the port 3000 and print a message when the server is started
app.listen(3000,()=> {console.log("Server started on port 3000.")});
*/

/* ==== Starting an HTTP server in express.js ====*/

//what kind of port we want to listen to
app.listen(process.env.PORT, () => {
    console.log("Server started on: http://localhost:" +process.env.PORT);
})

