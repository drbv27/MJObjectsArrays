//para poder lograr que un objeto no se modifique (sus valors)
//hacemos uso de "use strict"
"use strict";

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

//podemos usar un par de metodos para prevenir la modificacion
//metodos de objetos

Object.freeze(producto1); //freeze toma el objeto como argumento

//producto1.disponible = false;

//freeze no permite modificar ni permite adicionar propiedades nuevas, ni tampoco borrar propiedades

//producto1.imagen = "imagen.jpg"

console.log(Object.isFrozen(producto1))