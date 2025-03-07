// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
// lista de elementos uno por uno.

function procesarElemento(elemento) {
    return new Promise(function(resolver) {
      setTimeout(function() {
        console.log("Procesado:", elemento);
        resolver();
      }, 1000);
    });
  }
  
  async function procesarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
      await procesarElemento(lista[i]);
    }
    console.log("Todos los elementos han sido procesados.");
  }
  
  let numeros = [1, 2, 3, 4, 5];
  procesarLista(numeros);
  
  