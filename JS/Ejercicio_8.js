// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findIndex(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return i;
    }
  }
  return undefined;
}

console.log(findIndex(arreglo, function(elemento) {
  return elemento === 10; // Si quieres que devuelva undefined coloca cualquier numero mayor o igual a 10 para que lo devuelva
}));
