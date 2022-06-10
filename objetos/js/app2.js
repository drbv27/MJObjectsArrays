//como accedemos a las propiedades de un objeto

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(producto1);

//supongamos que deseo acceder al nombre. entonces en JS existe algo que se llama sintaxis de punto (ultraimportante)

console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto1.disponible);

//existe otra forma aunque no tan comun es obligatoria en ciertas situaciones

console.log(producto1['precio'])

//añadir propiedades al objeto
producto1.imagen = "imagen.jpg";

console.log(producto1);

//como eliminar propiedades de un objeto

delete producto1.precio;
console.log(producto1);