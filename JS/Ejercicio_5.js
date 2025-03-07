// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true


let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function every(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (!callback(arreglo[i])) {
      return false;
    }
  }
  return true;
}

console.log(every(arreglo, function(elemento) {
  return elemento > 0;
}));
