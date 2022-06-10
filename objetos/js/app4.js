//objetos anidados
//un objeto puede tener cualquier tipo de dat adentro incluso puede tener otros objetos adentro o arrays

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
    informacionA: {
        peso:"1kg",
        origen:"china",
        fabricacion:2019,
    }
}

console.log(producto1)

//como accedemos a los valores anidados

console.log(producto1.nombre)
console.log(producto1.informacionA.peso)