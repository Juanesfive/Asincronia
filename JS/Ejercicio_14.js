// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
// y mostrar el resultado final.


function promesaUno() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver(50);
      }, 1000);
    });
  }
  
  function promesaDos() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver(50);
      }, 1000);
    });
  }
  
  function promesaTres() {
    return new Promise(function(resolver, rechazar) {
      setTimeout(function() {
        resolver(50);
      }, 1000);
    });
  }
  
  promesaUno().then(function(resultadoUno) {
    return promesaDos().then(function(resultadoDos) {
      return resultadoUno + resultadoDos;
    });
  })
  
  .then(function(sumaParcial) {
    return promesaTres().then(function(resultadoTres) {
      return sumaParcial + resultadoTres;
    });
  })
  
  .then(function(resultadoFinal) {
    console.log("Resultado final: " + resultadoFinal);
  });
  
  