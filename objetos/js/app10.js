//otra forma es con el spread operator...REST OPERATOR

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

//MUY IMPORTANTE

const medidas = {
    peso:"2kg",
    medida:"1 metro",
}

//OJO EL ORDEN EQUE COLOQUE N EL SPREAD ES EL ORDEN EN QUE SE CREA

const resultado = {...producto1,...medidas};
//const resultado = {...medidas,...producto1};

console.log(producto1)
console.log(medidas)
console.log(resultado)