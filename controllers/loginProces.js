const conexion = require("../database/db");
const bcrypt = require("bcryptjs");
require("../router.js");



// registro de usuarios
exports.register = async (req, res) => {
  const user = req.body.user;
  const rol = req.body.rol;
  const pass = req.body.pass;
  let passwordHaash = await bcrypt.hash(pass, 8);
  let valor = "";

  conexion.query(
    "INSERT INTO login SET ?",
    { usermane: user, id_rol: rol, password: passwordHaash },
    async (err, results) => {
      if (err) {
        console.log(err.message);
      } else {
        res.render("register", {
          valor: "success",
          alert: true,
          alertTitle: "Registration",
          alertMessage: "Registro Exitoso",
          alertIcon: "success",
          showConfirmButtom: false,
          timer: 1500,
          ruta: "/login",
        });
      }
    }
  );
};

// User login
exports.login = async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  let passwordHaash = await bcrypt.hash(pass, 8);

  if (user && pass) {
    conexion.query(
      "SELECT * FROM login WHERE usermane= ? ",
      [user],
      async (err, results) => {
        console.log(results);
        if (
          results.length == 0 ||
          !(await bcrypt.compare(pass, results[0].password))
        ) {
          res.render("login", {
            alert: true,
            alertTitle: "Error",
            alertMessage: "Usuario y/o Passwod incorrecto",
            alertIcon: "error",
            showConfirmButtom: true,
            timer: false,
            ruta: "/login",
          });
        } else {
          req.session.rol = results[0].id_rol;
          req.session.loggedIn = true;
          res.render("login", {
            alert: true,
            alertTitle: "Conexion Exitosa",
            alertMessage: "LogIn Correcto",
            alertIcon: "success",
            showConfirmButtom: false,
            timer: 1500,
            ruta: "/",
          });
        }
      }
    );
  } else {
    res.render("login", {
      alert: true,
      alertTitle: "Advertencia",
      alertMessage: "Ingrese un usuario y/o password",
      alertIcon: "warning",
      showConfirmButtom: true,
      timer: false,
      ruta: "/login",
    });
  }
};
//logout

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};
//Auth pages
exports.Auth = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("index.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("indexMaestro.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};


//Auth para Base de datos
exports.AuthDB = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/DataBase/basededatos.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/DB.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};
//Auth para Matematicas
exports.AuthMT = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/Matematicas/matematicas.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/MT.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};
//Auth para Habilidades Gerenciales
exports.AuthHG = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/HabilidadesG/habilidades.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/HG.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};
//Auth para Ingles
exports.AuthIN = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/Ingles/ingles.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/IN.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};

//Auth para Proframacion
exports.AuthPG = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/Programacion/programacion.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/PG.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};

//Auth para Redes
exports.AuthRD = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/Redes/redes.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/RD.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};

//Auth para SO
exports.AuthSO = (req, res) => {
  if (req.session.loggedIn ) {
      if(req.session.rol==2){
        
        res.render("./viewsAlumno/SistemasOperativos/SO.ejs", {rol:'alumno',login: true });
      }else if(req.session.rol==1){
      res.render("./viewsMaestro/SO.ejs", { login: true, rol:'maestro' });
      }
      
  } else {
    res.render("index", {
      login: false,
      rol:' '
    });
  }
};