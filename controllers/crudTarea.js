const conection = require('../database/db');

exports.save = (req,res)=>{
    const id_tarea= req.body.id_tarea;
    const id_mp= req.body.id_mp;
    const id_unidad= req.body.id_unidad;
    const descripcion= req.body.descripcion;
    const fecha_de_entrega= req.body.fecha_de_entrega;
}
