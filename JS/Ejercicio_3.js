// Crear una función map que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • obtenga el resultado
// • lo pushee a un nuevo array

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function map(arreglo, callback) {
    let resultadoFinal = [];
    for (let indice = 0; indice < arreglo.length; indice++) {
      let valorProcesado = callback(arreglo[indice]);
      resultadoFinal.push(valorProcesado);
    }
    return resultadoFinal;
  }
  
  console.log(map(arreglo, (elemento) => elemento * 2));
  



