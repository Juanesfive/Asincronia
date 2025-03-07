// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".

let promesa = new Promise(function(resolver, rechazar) {
    setTimeout(function() {
      rechazar("Promise rechazada");
    }, 2000);
  });
  
  promesa.catch(function(error) {
    console.log("Error:  " + error);
  });
  