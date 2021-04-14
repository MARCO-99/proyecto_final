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
    console.log(req.body);
    if (rows.length>0){
        const user=rows[0];
        const validPassword= await helpers.matchPassword(password,user.pass);
        if(validPassword){
            done(null,user,req.flash('Success','Bienvenido'+user.user))
        }
        else{
            done(null,flase,req.flash('message',"incorrecto"))
        }
    }else{
        return done(null, false,req.flash('message',"EL usuario no existe"))
    }

    
}))