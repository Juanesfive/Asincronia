// Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.

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
        rechazar("Promesa 2 rechazada");
      }, 2000);
    });
  }
  
  function promesaTres() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver("Promesa 3 resuelta");
      }, 1500);
    });
  }
  
  Promise.allSettled([promesaUno(), promesaDos(), promesaTres()])
    .then(function(resultados) {
      console.log("Resultados de todas las Promises:");
      console.log(resultados);
    });
  