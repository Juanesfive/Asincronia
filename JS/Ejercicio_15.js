// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.

const fs = require('fs');

fs.readFile('../Datos_Json/info.json', 'utf8', function(error, info) {
  if (error) {
    console.error("Error al leer el archivo:", error);
    return;
  }
  let datos = JSON.parse(info);
  console.log(datos);
});
