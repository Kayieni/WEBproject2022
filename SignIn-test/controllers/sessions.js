// const logname = require('../controllers/auth');

exports.setSession = async(req,res) => {
    req.session.userid = logname;
    console.log(logname);
    console.log(req.session)
    console.log('Session value set');
};

exports.getSession = async (req,res) => {
    const userid = req.session.userid;
    console.log(userid)
    console.log(`Session value: ${userid}`);
    return userid;
};

exports.checkAuth = async(req,res,next) => {
    if(req.session && req.session.userid) {
        //The user is authenticated, allow them to access the page
        return next();
    }else {
        //The user is not authenticated, redirect them to the login page
        res.render('login', {message: "You need to login again"});
        console.log("need auth");
    }
};