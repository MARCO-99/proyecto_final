const conexion = require('../database/db');
const conection = require('../database/db');

exports.saveExamen = (req,res)=>{
    var matricula_profesor = req.body.matricula_profesor;
    var name_materia = 'Habilidades gerenciales'
    var id_examen= req.body.id_examen;
    var id_mp= req.body.id_mp;
    var id_unidad= req.body.id_unidad;
    var fecha_aplicacion= req.body.fecha_aplicacion;
    parseInt(id_unidad);
     console.log("Examen registrado"+id_unidad+" "+name_materia+" "+matricula_profesor+" "+fecha_aplicacion);
    // 2500007 2 2020-10-17
    conexion.query('call registrarExamen(?,?,?,?)', [id_unidad, name_materia, matricula_profesor, fecha_aplicacion], (error, results)=>{
        if (error) {
            console.log('este es el error:'+error);
        } else {
            res.redirect('./registroExamenDB');
        }
    })
} 
 