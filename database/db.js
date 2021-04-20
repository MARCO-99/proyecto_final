//Database conexion
const mysql = require('mysql');


const conexion = mysql.createConnection({
    host: "wpdatabaseserver.mysql.database.azure.com", 
    user: "adminProject@wpdatabaseserver", 
    password: 'UPMPwebproject_', 
    database: 'webproject', 
    port: 3306,
    
  });
  
  
  conexion.connect(function(error) {
    if (error){
      throw error;
    }else{
      console.log("Conexion Exitosa")
      
    }
  })


  module.exports= conexion;

// insert into rol values(null,"maestro");

// insert into login values(null,"marco.2018110050","123456",2);
// insert into login values(null,"laura.2500019","123456",1);

// UPDATE alumno set id_login=1 where matricula=2018110050;
// UPDATE alumno set id_login=2 where matricula=2018110027;

// UPDATE profesor set id_login=3 where id_profesor=2500019;
