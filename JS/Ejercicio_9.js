//¿Cuál es el resultado del código a continuación?

let i= 0;
 

setTimeout(() => alert(i), 100); // El resultado es que se mostrará una alerta
//  con el número 100000000. Esto sucede porque el bucle incrementa la variable
//  "i" 100 millones de veces antes de que se ejecute el callback de setTimeout,
//  ya que el bucle toma más de 100 ms en completarse.


// asumimos que el tiempo para ejecutar esta función es > 100 ms 
for (let j = 0; j < 100000000; j++) { 
i++;  
}