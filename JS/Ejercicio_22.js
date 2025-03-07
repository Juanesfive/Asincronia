// Crear un objeto proxy usando la clase Proxy

const { log } = require("console");

let objetoOriginal = {
    nombre: "Juan",
    edad: 19,
    municipio: "Giron"
  };
  
  let controlador = {
    get: function(objeto, propiedad) {
      if (propiedad in objeto) {
        return objeto[propiedad];
      }
      return "La propiedad no existe";
    },
    set: function(objeto, propiedad, valor) {
      console.log("Asignando " + valor + " a " + propiedad);
      objeto[propiedad] = valor;
      return true;
    }
  };
  
  let proxy = new Proxy(objetoOriginal, controlador);
  
  console.log(proxy.nombre);
  console.log(proxy.altura); // La propiedad no existe porque no la asigne en el objeto
  console.log(proxy.municipio);  
  proxy.edad = 25;
  console.log(objetoOriginal.edad);
  
  
  