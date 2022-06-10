//los objetos son una de las 2 piezas (tipos de datos) claves en JS, porque porque nos permiten juntar informacion

const nombreProducto = "Monitor de 21 pulgadas";
const precioProducto = 120;
const productoDisponible = true;

//podemos crear mejor un objeto que agrupe toda esta informacion en una sola variable
//como se crea un objeto

const producto2 = {
    //esto es lo que se conoce como literal de objeto (object literal)
}

//luego de las llaves colocamosl las propiedades o las llaves

/*
const producto3 = {
    nombre://esto es lo que se conoce como llave
}
*/

//despues de la llave debe ir el valor

const producto = {
    nombre:"Monitor de 21 pulgadas"//nota como en lugar del signo igual se utlizan :, esta sintaxis es propia de los objetos y representa el valor que tendra la propiedad o llave del objeto, a la pareja muchas veces se les llama....llave:valor
}

//si quiero agrgar mas propiedades simplemente las separo con comas

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(producto1)