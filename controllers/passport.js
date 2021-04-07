const passport = require('passport')
const LocalStrategy =require('passport-local').Strategy


passport.use('local.signin', new LocalStrategy({
    usernameField:"user",
    passwordField:"pass",
    passReqToCallback:true
    
},async(req,user, pass, done)=>{
   // console.log(req.body)
    //console.log(user)
    //console.log(pass)
    const rows = await pool.query('SELECT*FROM login where username= ?', [user]);
    if(rows.length>0){
        const user= rows[0];
        
    }
}))