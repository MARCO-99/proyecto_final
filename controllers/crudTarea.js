const conexion = require('../database/db');
const conection = require('../database/db');

exports.saveTarea = (req,res)=>{
    var matricula_profesor = req.body.matricula_profesor;
    var name_materia = 'Habilidades gerenciales'
    var id_tarea= req.body.id_tarea;
    var id_mp= req.body.id_mp;
    var id_unidad= req.body.id_unidad;
    var descripcion= req.body.descripcion;
    var fecha_de_entrega= req.body.fecha_de_entrega;
    parseInt(id_unidad);
     console.log("Tarea registrada"+id_unidad+" "+name_materia+" "+matricula_profesor+" "+descripcion+" "+fecha_de_entrega);
    // 2500007 2 2020-10-17
    conexion.query('call registrarTarea(?,?,?,?,?)', [id_unidad, name_materia, matricula_profesor, descripcion, fecha_de_entrega], (error, results)=>{
        if (error) {
            console.log('este es el error:'+error);
        } else {
            res.redirect('./registroTareasDB')
        }
    })
    /* conexion.query('call registrarTarea(2, "Habilidades gerenciales", "2500007", "nueva tarea", "2020-10-17")', (error, results)=>{
        if (error) {
            console.log('este es el error:'+error);
        } else {
            res.redirect('./registroTareasDB')
        }
    }) */
}

exports.updateTarea = (req, res)=>{
    const id_tarea= req.body.id_tarea;
    const id_mp= req.body.id_mp;
    const id_unidad= req.body.id_unidad;
    const descripcion= req.body.descripcion;
    const fecha_de_entrega= req.body.fecha_de_entrega;
    parseInt(id_unidad);
    console.log("Tarea actualizada id:"+id_tarea+" id mp:"+id_mp+" id unidad:"+id_unidad+" descripcion"+" "+descripcion+" "+fecha_de_entrega);
    conexion.query('UPDATE  tarea SET ? WHERE id_tarea=?', [{descripcion:descripcion, fecha_de_entrega:fecha_de_entrega}, id_tarea], (error, results)=>{
        if (error) {
            console.log('este es el error:'+error);
        } else {
            res.redirect('./registroTareasDB')
        }
    })
}

exports.asignacalificacion = (req, res)=>{
    const id_ta= req.body.id_ta;
    const calificacion = req.body.calificacion;
    const matricula = req.body.matricula;
    console.log(" Tarea id:"+id_ta+" calif:"+calificacion+" matricula:"+matricula);
    conexion.query('UPDATE ta, alumno SET ? WHERE ta.id_tarea=? and ta.matricula= ? and ta.matricula= alumno.matricula;', [{calificacion:calificacion}, id_ta, matricula], (err, results) =>{
                if (err){
                        throw err;
                }
                else{
                    res.redirect('./asignarCalificacionesTareasDB');
                }
        })
}

/* exports.saveExamen = (req,res)=>{
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
    }) */

//}
