// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function some(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return true;
    }
  }
  return false;
}

console.log(some(arreglo, function(elemento) {
  return elemento > 8;
}));
