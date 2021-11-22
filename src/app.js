//Requieres

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var jsonParser = bodyParser.json();
var app = express();

//APP usage

app.use(cookieParser());
app.use(cors({ origin: '*'}));
app.use(express.urlencoded({ extended: true }));


app.get('/hola-mundo', function(req, res) {
  res.send("¡Hola mundo!")
});


app.get('/experiencia-laboral', function(req, res) {
  res.send(`{
    "experiencia-laboral": [
      {
        "empresa": "Integra CCS",
        "puesto": "Proyect Manager",
        "descripcion": "• Panificación, ejecución y validación de requerimientos de la plataforma.
  • Capacitación al cliente sobre el producto y/o nuevos requerimientos.
  • Relevamiento de tareas y seguimiento a miembros del equipo.
  • Elaboración de documentos de Alcance y documentación del proceso
  • Capacitación interna del departamento",
        "fechaInicio": "07/01/2019",
        "fechaFin": "Actualidad"
      },
       {
        "empresa": "Antel",
        "puesto": "Pasante",
        "descripcion": "• Tareas Administrativas",
        "fechaInicio": "07/07/2018",
        "fechaFin": "05/01/2019"
      }]
  }`)
});




app.post('/enviar-formulario', jsonParser, function(req, res) {
  const nombreContact = req.body.nombreContact;
  if (!nombreContact) {
    return res.status(400).send("Error: No sea ha ingresado un nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", nombreContact);
  res.send("Envìo del formulario exitoso");
});


app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 - Lo sentimos, la página solicitada no fue encontrada");
}); 

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;

