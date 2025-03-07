// Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
// resuelta" cuando se cumpla.

let promesa = new Promise(function(resolver) {
    setTimeout(resolver, 3000);
  });
  
  promesa.then(function() {
    console.log("Promisa resuelta");
  });
  
  