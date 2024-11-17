/* 
Creamos una API RESTful, REST es un tipo de arquitectura para servicios web,
las APIs RESTful utilizan metodos HTTP (GET, POST, PUT, DELETE).

Algunas cualidades de aplicaciones REST son el hecho de que no manejan estados
(cada solicitud es independiente) y que los recursos se obtienen mediante URLs
unicas.
*/

const express = require("express");
const app = express();
const puerto = process.env.PORT || 3000;

//Middleware para manejar JSON en las solicitudes
app.use(express.json());

//Ruta raiz para el navegador
app.get("/", (req, res) => {
  res.send("Bienvenido al API de usuarios");
});

//Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
