// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.

const fs = require('fs').promises;

async function obtenerDatos() {
  let contenido = await fs.readFile('../Datos_Json/info.json', 'utf8');
  let datos = JSON.parse(contenido);
  let informacionEspecifica = [];
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].edad > 20) {
      informacionEspecifica.push({
        nombre: datos[i].nombre,
        ciudad: datos[i].ciudad
      });
    }
  }
  console.log(informacionEspecifica);
}

obtenerDatos();
