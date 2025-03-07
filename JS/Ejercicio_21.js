// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
// try/catch para mostrar un mensaje de error en caso de fallo.

const fs = require('fs').promises;

async function mostrarDatos() {
  try {
    let contenido = await fs.readFile('../Datos_Json/info.json', 'utf8');
    let datos = JSON.parse(contenido);
    console.log(datos);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

mostrarDatos();
