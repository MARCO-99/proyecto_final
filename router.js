const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
        res.render('./viewsAlumno/indexAlumno.ejs')
})
router.get('/login',(req,res)=>{
        res.render('../views/login.ejs')
})

router.get('/estilos',(req,res)=>{
        res.render('./css/estilos.css')
})

router.get('/Matematicas',(req,res)=>{
        res.render('./viewsAlumno/matematicas.ejs')
})
router.get('/programacion',(req,res)=>{
        res.render('./viewsAlumno/programacion.ejs')
})
router.get('/ingles',(req,res)=>{
        res.render('./viewsAlumno/ingles.ejs')
})
router.get('/redes',(req,res)=>{
        res.render('./viewsAlumno/redes.ejs')
})
router.get('/sistemasOperativos',(req,res)=>{
        res.render('./viewsAlumno/sistemasOperativos.ejs')
})
router.get('/habilidades',(req,res)=>{
        res.render('./viewsAlumno/habilidades.ejs')
})
router.get('/basededatos',(req,res)=>{
        res.render('./viewsAlumno/basededatos.ejs')
})

//directorio public
router.use('/resources',express.static('public'));
router.use('/resources',express.static(__dirname + '/public'));


//autenticacion

//links
module.exports = router;

