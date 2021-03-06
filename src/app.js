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

const respuesta = JSON.stringify({"experiencia-laboral": [{"empresa": "Integra CCS",
"puesto": "Proyect Manager",
"descripcion": " Panificación, ejecución y validación de requerimientos de la plataforma, así como también al cliente. Relevamiento de tareas y seguimiento a miembros del equipo de implementación. Elaboración de documentos de Alcance y documentación del proceso. Capacitación interna del departamento","fechaInicio": "07/01/2019",
"fechaFin": "Actualidad"
},
{
"empresa": "Antel",
"puesto": "Pasante",
"descripcion": "• Tareas Administrativas",
"fechaInicio": "07/07/2018",
"fechaFin": "05/01/2019"
}]
});

app.get('/experiencia-laboral', function(req, res) {
  res.send(respuesta);
});




app.post('/enviar-formulario', jsonParser, function(req, res) {
  const nombreContacto = req.body.nombreContacto;
  if (!nombreContacto) {
    return res.status(400).send("Falta el nombre de contacto");
  }
  res.cookie("PW_2021-CV_Contacto", nombreContacto);
  res.send("Se completó la operación con éxito");
});


app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 - No fue encontrado");
}); 

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;

