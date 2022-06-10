//como unimos 2 objetos, algo que llega a ser muy comun en el desarrollo web,a veces en una DB obtenemos por ejemplo el Id de un cliente y nos gustaria unir varios clientes.

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

const medidas = {
    peso:"2kg",
    medida:"1 metro",
}

//la primera forma de unir objetos es con un metodo que se llama assign

const resultado = Object.assign(producto1,medidas);

console.log(producto1)
console.log(medidas)
console.log(resultado)