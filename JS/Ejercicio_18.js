// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

function promesaUno() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver("Promesa 1 resuelta");
      }, 1000);
    });
  }
  
  function promesaDos() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver("Promesa 2 resuelta");
      }, 2000);
    });
  }
  
  function promesaTres() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver("Promesa 3 resuelta");
      }, 3000);
    });
  }
  
  Promise.all([promesaUno(), promesaDos(), promesaTres()])
    .then(function(resultados) {
      console.log("Todas las promesas se han resuelto");
      console.log(resultados);
    })
    .catch(function(error) {
      console.error("Alguna promesa falló:", error);
    });
  
    