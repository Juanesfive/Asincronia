// En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?

let i = 0;

setTimeout(() => alert(i), 100); // Aquí alert imprime 100000000

// asumimos que el tiempo para ejecutar esta función es > 100 ms
for(let j = 0; j < 100000000; j++) {  // Aqui uso el for para que i se incremente uno en uno y como el for se va a repetir 100000000 esto es en lo que se convertira 
  i++;
}
    
