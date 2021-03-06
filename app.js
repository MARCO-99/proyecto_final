const express = require('express');
const app = express();
const conexion= require('./database/db');
// const morgan= require('morgan')
// const passport = require('passport');
//const flash = require()

require('./controllers/passport')
// const exphbs = require('express-handleabars');
// const path= require('path');

//inizializacion
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// motor de plantillas
app.set('view engine', 'ejs');





// app.set('views',path.join(_dirname.))
// app.engine('.ejs',exphbs({
//     defaultLayout: 'login.ejs';
//     layoutDir: path.join()
// }))

//directorio public
app.use('/resources',express.static('Public'));
app.use('/resources',express.static(__dirname + '/Public'));

//Middlewares
// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

// //variables globales
// app.use((req,res,next)=>{
//     next();
// })

//var de sesion
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}))




//acceso a rutas
app.use('/',require('./router'));

app.listen(3000, ()=>{
    console.log('Server running in http://localhost:3000/')
});
