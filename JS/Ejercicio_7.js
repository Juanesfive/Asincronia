// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined

let arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function find(arreglo, callback) {
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
      return arreglo[i];
    }
  }
  return undefined;
}

console.log(find(arreglo, function(elemento) {
  return elemento === 0; // Si quieres que devuelva undefined coloca cualquier numero mayor a 10 para que lo devuelva
}));
