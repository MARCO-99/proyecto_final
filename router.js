const express = require('express');

const router = express.Router();
const conexion= require('./database/db');
const passport =require('passport');
const crud = require('./controllers/loginProces');

//VISTAS
// router.get('/',(req,res)=>{
//         res.render('./index.ejs')
// })
//Rutas para Matematicas
router.get('/Matematicas',crud.AuthMT)
router.get('/tareasMT',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "matematicas para la ingenieria")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Matematicas/tareaMT.ejs')
                }
        })
})

router.get('/examenMT',(req,res)=>{
        res.render('./viewsAlumno/Matematicas/examenMT.ejs')
})
router.get('/finalMT',(req,res)=>{
        res.render('./viewsAlumno/Matematicas/finalMT.ejs')
})

//Rutas para Proframacion
router.get('/programacion',crud.AuthPG)

router.get('/tareasPG',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "programacion orientada a objetos")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Programacion/tareaPG.ejs')
                }
        })
})

router.get('/examenPG',(req,res)=>{
        res.render('./viewsAlumno/Programacion/examenPG.ejs')
})
router.get('/finalPG',(req,res)=>{
        res.render('./viewsAlumno/Programacion/finalPG.ejs')
})

//Rutas para Ingles
router.get('/ingles',crud.AuthIN)

router.get('/tareasIN',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "ingles VII")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Ingles/tareaIN.ejs')
                }
        })
})

router.get('/examenIN',(req,res)=>{
        res.render('./viewsAlumno/Ingles/examenIN.ejs')
})
router.get('/finalIN',(req,res)=>{
        res.render('./viewsAlumno/Ingles/finalIN.ejs')
})

//Rutas para Redes
router.get('/redes',crud.AuthRD)

router.get('/tareasRD',(req,res)=>{
        res.render('./viewsAlumno/Redes/tareaRD.ejs')
})
router.get('/examenRD',(req,res)=>{
        res.render('./viewsAlumno/Redes/examenRD.ejs')
})
router.get('/finalRD',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "interconexion de redes")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Redes/finalRD.ejs')
                }
        })
})

//Rutas para Sistemas operativos
router.get('/sistemasOperativos',crud.AuthSO)
router.get('/tareasSO',(req,res)=>{
        conexion.query("SELECT * from calificacionesTareas", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/SistemasOperativos/tareaSO.ejs',{results:results})
                }
        })
})

router.get('/examenSO',(req,res)=>{
        res.render('./viewsAlumno/SistemasOperativos/examenSO.ejs')
})
router.get('/finalSO',(req,res)=>{
        res.render('./viewsAlumno/SistemasOperativos/finalSO.ejs')
})

//Rutas para Habilidades Gerenciales
router.get('/habilidades',crud.AuthHG)

router.get('/tareasHG',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "habilidades gerenciales")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/HabilidadesG/tareaHG.ejs')
                }
        })
})
router.get('/examenHG',(req,res)=>{
        res.render('./viewsAlumno/HabilidadesG/examenHG.ejs')
})
router.get('/finalHG',(req,res)=>{
        res.render('./viewsAlumno/HabilidadesG/finalHG.ejs')
})

//Rutas para base de datos
router.get('/basededatos',crud.AuthDB)

router.get('/tareasDB',(req,res)=>{
        conexion.query('CALL varCalificacionesTarea(2018110027, "administracion base de datos")', (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/DataBase/tareasDB.ejs', {results:results})
                }
        })
})

router.get('/examenDB',(req,res)=>{
        res.render('./viewsAlumno/DataBase/examenDB.ejs')
})
router.get('/finalDB',(req,res)=>{
        res.render('./viewsAlumno/DataBase/finalDB.ejs')
})


// Rutas de maestros
//Rutas de bases de datos maestros
router.get('/basededatos',crud.AuthDB)

router.get('/registroTareasDB',(req,res)=>{
        res.render('./viewsMaestro/database/tareaBD.ejs')
})
router.get('/registroExamenDB',(req,res)=>{
        res.render('./viewsMaestro/database/examenBD.ejs')
})
router.get('/registroFinalDB',(req,res)=>{
        res.render('./viewsMaestro/database/finalBD.ejs')
})
// Rutas de Ingles Maestros
router.get('/ingles',crud.AuthIN)

router.get('/registroTareasIN',(req,res)=>{
        res.render('./viewsMaestro/English/tareaIN.ejs')
})
router.get('/registroExamenIN',(req,res)=>{
        res.render('./viewsMaestro/English/examenIN.ejs')
})
router.get('/registroFinalIN',(req,res)=>{
        res.render('./viewsMaestro/English/finalIN.ejs')
})
//directorio public
router.use('/resources',express.static('Public'));
router.use('/resources',express.static(__dirname + '/Public'));

//Ruta para logup

router.get('/register',(req,res)=>{
        res.render('register.ejs');
    });
//autenticacion
router.get('/login',(req,res)=>{
        res.render('../views/login.ejs')
})

// router.post('/signin',(req,res,next)=>{
//         passport.authenticate('local.signin',{
//                 successRedirect:'/',
//                 failureRedirect:'/login',
//                 failureFlash: true
//         });(req,res,next)
// })

router.post('/register',crud.register);
router.post('/auth',crud.login);
router.get('/',crud.Auth);
router.get('/logout',crud.logout)
//links
module.exports = router;

