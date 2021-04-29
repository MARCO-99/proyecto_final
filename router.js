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
        conexion.query("SELECT * from calTarea where name_materia='matematicas para la ingenieria';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Matematicas/tareaMT.ejs',{results:results})
                }
        })
})

router.get('/examenMT',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='matematicas para la ingenieria';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Matematicas/examenMT.ejs', {results:results})
                }
        })
})

router.get('/finalMT',(req,res)=>{
        conexion.query("SELECT * from calFInal where name_materia='matematicas para la ingenieria';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Matematicas/finalMT.ejs',{results:results})
                }
        })
})

//Rutas para Proframacion
router.get('/programacion',crud.AuthPG)

router.get('/tareasPG',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='programacion orientada a objetos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Programacion/tareaPG.ejs',{results:results})
                }
        })
})

router.get('/examenPG',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='programacion orientada a objetos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Programacion/examenPG.ejs',{results:results})
                }
        })
})

router.get('/finalPG',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='programacion orientada a objetos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Programacion/finalPG.ejs',{results:results})
                }
        })
})

//Rutas para Ingles
router.get('/ingles',crud.AuthIN)

router.get('/tareasIN',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='ingles VII';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Ingles/tareaIN.ejs',{results:results})
                }
        })
})

router.get('/examenIN',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='ingles VII';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Ingles/examenIN.ejs',{results:results})
                }
        })
})

router.get('/finalIN',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='ingles VII';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Ingles/finalIN.ejs',{results:results})
                }
        })
})

//Rutas para Redes
router.get('/redes',crud.AuthRD)

router.get('/tareasRD',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='interconexion de redes';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Redes/tareaRD.ejs',{results:results})
                }
        })
})

router.get('/examenRD',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='interconexion de redes';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Redes/examenRD.ejs',{results:results})
                }
        })
})

router.get('/finalRD',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='interconexion de redes';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/Redes/finalRD.ejs',{results:results})
                }
        })
})

//Rutas para Sistemas operativos
router.get('/sistemasOperativos',crud.AuthSO)

router.get('/tareasSO',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='sistemas operativos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/SistemasOperativos/tareaSO.ejs',{results:results})
                }
        })
})

router.get('/examenSO',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='sistemas operativos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/SistemasOperativos/examenSO.ejs',{results:results})
                }
        })
})

router.get('/finalSO',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='sistemas operativos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/SistemasOperativos/finalSO.ejs',{results:results})
                }
        })
})

//Rutas para Habilidades Gerenciales
router.get('/habilidades',crud.AuthHG)

router.get('/tareasHG',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='habilidades gerenciales';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/HabilidadesG/tareaHG.ejs',{results:results})
                }
        })
})

router.get('/examenHG',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='habilidades gerenciales';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/HabilidadesG/examenHG.ejs',{results:results})
                }
        })
})

router.get('/finalHG',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='habilidades gerenciales';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/HabilidadesG/finalHG.ejs',{results:results})
                }
        })
})

//Rutas para base de datos
router.get('/basededatos',crud.AuthDB)

router.get('/tareasDB',(req,res)=>{
        conexion.query("SELECT * from calTarea where name_materia='administracion de base de datos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/DataBase/tareasDB.ejs', {results:results});
                }
        })
})


router.get('/examenDB',(req,res)=>{
        conexion.query("SELECT * from calExamen where name_materia='administracion de base de datos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/DataBase/examenDB.ejs', {results:results})
                }
        })
})

router.get('/finalDB',(req,res)=>{
        conexion.query("SELECT * from calFinal where name_materia='administracion de base de datos';", (err,results)=>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsAlumno/DataBase/finalDB.ejs', {results:results})
                }
        })
})


// Rutas de maestros
//Rutas de bases de datos maestros
const crudTarea = require('./controllers/crudTarea');
const crudExamen = require('./controllers/crudExamen');
const { response } = require('express');

router.get('/basededatos',crud.AuthDB)

router.get('/registroTareasDB',(req,res)=>{
        // Ruta para visualizar las tareas BD
        conexion.query("SELECT * FROM tarea, materiaprof WHERE tarea.id_mp = materiaprof.id_mp and materiaprof.id_materia = 45;", (err, resultados) =>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/database/tareaBD.ejs', {resultados:resultados});
                }
        })
        // res.render('./viewsMaestro/database/tareaBD.ejs')
})

router.get('/asignarCalificacionesBD/:id_tarea/:matricula', (req, res)=>{
        const id_tarea = req.params.id_tarea;
        const matricula = req.params.amtricula;
        conexion.query("SELECT ta.id_tarea, alumno.matricula, alumno.nombre, alumno.apellidoap, ta.calificacion FROM ta, alumno WHERE ta.id_tarea = ? and ta.matricula = ? and ta.matricula = alumno.matricula;",[id_tarea, matricula], (err, resultados) =>{
                console.log({resultados:resultados});
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/database/asignarCalificacionBD.ejs', {resultados:resultados});
                }
        })
})

router.post('/asignacalificacion',crudTarea.asignacalificacion);


 router.get('/calificacionesTareasDB/:id_tarea',(req,res)=>{
        // Ruta para visualizar las tareas BD
        const id_tarea = req.params.id_tarea;
        conexion.query("SELECT tarea.id_tarea, tarea.descripcion, alumno.matricula, alumno.nombre, alumno.apellidoap, ta.calificacion FROM tarea, ta, alumno WHERE tarea.id_tarea = ? and ta.matricula = alumno.matricula and tarea.id_tarea = ta.id_tarea;",[id_tarea], (err, resultados) =>{
                console.log({resultados:resultados});
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/database/calificacionesTareasDB.ejs', {resultados:resultados});
                }
        })
        // res.render('./viewsMaestro/database/tareaBD.ejs')
}) 



router.get('/nuevaTareaDB', (req, res)=>{
        res.render('./viewsMaestro/database/nuevaTareaDB');
})


router.post('/saveTarea', crudTarea.saveTarea);



router.get('/deleteTarea/:id_tarea', (req,res)=>{
        const id_tarea = req.params.id_tarea;
        conexion.query('DELETE FROM ta WHERE id_tarea=?;',[id_tarea], (error, results)=>{
                if(error){
                        throw error;
                }
                else{
                        conexion.query('DELETE FROM tarea WHERE id_tarea=?;',[id_tarea], (error, results)=>{
                                if(error){
                                        throw error;
                                }else{
                                        console.log(results);
                                        res.redirect('/registroTareasDB');
                                }
                        })
                }       
        })
})

router.get('/editarTareasDB/:id_tarea', (req, res)=>{
        const id_tarea = req.params.id_tarea;
        conexion.query('SELECT * FROM tarea WHERE id_tarea=?;',[id_tarea], (error, resultados)=>{
                if(error){
                        throw error;
                }
                else{
                        //console.log(JSON.stringify(resultados[0]));
                        res.render('./viewsMaestro/database/editarTareasDB',{resultados:resultados});
                        // console.log(tarea);
                }       
        })
})

router.post('/updateTarea',crudTarea.updateTarea);



//MAESTROS Rutas para examen DB
router.post('/saveExamen',crudExamen.saveExamen);

router.get('/registroExamenDB',(req,res)=>{
        /*res.render('./viewsMaestro/database/examenBD.ejs')*/
        conexion.query("SELECT * FROM examen, materiaprof WHERE examen.id_mp = materiaprof.id_mp AND materiaprof.id_materia = 45;", (err, resultados) =>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/database/examenBD.ejs', {resultados:resultados})
                }
        })
})

router.get('/nuevoExamenDB', (req, res)=>{
        res.render('./viewsMaestro/database/nuevoExamenDB');
})

/*const crudExamen = require('./controllers/crudExamen');
const { respuesta } = require('express');
router.post('/save', crudExamen.guardar);*/


router.get('/registroFinalDB',(req,res)=>{
        res.render('./viewsMaestro/database/finalBD.ejs')
})

// Rutas de Ingles Maestros
router.get('/ingles',crud.AuthIN)

router.get('/registroTareasIN',(req,res)=>{
        conexion.query("SELECT * FROM tarea;", (err, resultados) =>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/English/tareaIN.ejs', {resultados:resultados})
                }
        })
        // res.render('./viewsMaestro/English/tareaIN.ejs')
})

router.get('/registroExamenIN',(req,res)=>{
        /*res.render('./viewsMaestro/English/examenIN.ejs')*/
        conexion.query("SELECT * FROM examen, materiaprof WHERE examen.id_mp = materiaprof.id_mp AND materiaprof.id_materia = 46;", (err, resultados) =>{
                if (err){
                        throw err;
                }
                else{
                        res.render('./viewsMaestro/English/examenIN.ejs', {resultados:resultados});
                }
        })
})

router.get('/nuevoExamenIN', (req, res)=>{
        res.render('./viewsMaestro/English/nuevoExamenIN');
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

