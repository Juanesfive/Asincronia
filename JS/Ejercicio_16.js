// Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").


const fs = require('fs').promises;

fs.readFile('../Datos_Json/info.json', 'utf8')
  .then(function(data) {
    var datos = JSON.parse(data);
    var filtrados = datos.filter(function(item) {
      return item.nombre && item.nombre.charAt(0) === 'J';
    });
    console.log(filtrados);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });

  