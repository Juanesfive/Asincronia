// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filter(arreglo, callback) {
  let elementosFinales = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (callback(arreglo[i])) {
        elementosFinales.push(arreglo[i]);
    }
  }
  return elementosFinales;
}

console.log(filter(arreglo, function(elemento) {
  return elemento % 2 === 0;
}));
 