// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.


async function realizarTarea() {
    await new Promise(function(resolver) {
      setTimeout(resolver, 1000);
    });
    return "Operación completada";
  }
  
  realizarTarea().then(function(resultado) {
    console.log(resultado);
  });
  
  