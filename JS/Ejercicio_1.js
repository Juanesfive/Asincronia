// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde = 10; // se define la variable "desde" para que sea que en el 10 empieze la impresión de los numeros.
let hasta = 20; // se define la variable "hasta" para que sea que en el numero 60 se detenga la impresión de los numeros. 

// Aqui se escribe una funcion declarada llamada imprimir Numeros y como parametros las variables anteriodes.
function imprimirNumeros(desde, hasta) {
    let i = desde; // Aquí declaro la variable i y le asigno el valor que tiene la variable "desde" que este caso seria 10.   
    const stop = setInterval(() => { // Aquí declaro una funcion expresada donde estoy haciendo uso de la funcion setInterval que realiza que el codigo
        // que este dentro de esta funcion se ejecute cada cierto tiempo que en este caso seria cada 1 segundo.
         
        if (i === hasta) { // Aquí hago uso de la sentencia if para que cuando "i" sea estrictamente igual al valor de "hasta" que seria 20 esto hara
        // que se active la funcion clearInterval que cancelara la funcion SetInterval. 
            clearInterval(stop);
        }
        console.log(i); // Aquí imprimo en consola el valor de "i"  que se ira incrementando con el siguiente operador incremento
        i++; // Aquí se incremete el valor de "i" en uno en uno cada segundo gracias al setInterval
        
    }, 1000); // Aquí le decimos a la funcion de setInterval que se ejecute cada segundo
}

imprimirNumeros(desde, hasta); // Aquí se llama a la funcion "imprimirNumeros" con los parametros "desde" y "hasta" para que se ejecute.  


