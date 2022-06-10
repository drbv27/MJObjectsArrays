//Object.keys y Object.values y entries, estos se conocen como iteradores de objetos

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(Object.keys(producto1))
console.log(Object.values(producto1))
console.log(Object.entries(producto1))