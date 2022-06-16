const miCarrito = [];

const producto1 = {
    nombre:"Monitor de 21",
    precio:120,
    disponible:true, 
}
const producto2 = {
    nombre:"Parlantes BT",
    precio:200,
    disponible:true, 
}

const producto3 = {
    nombre:"Teclado Wl",
    precio:50,
    disponible:true, 
}

miCarrito.push(producto1)
miCarrito.push(producto2)
miCarrito.push(producto3)

console.log(miCarrito)

//como eliminar elementos
//eliminar el primer elemento utilizan .shift()
/* miCarrito.shift();
console.log(miCarrito) */

//para eliminar el ultimo
//utilzan.pop()

miCarrito.pop()
console.log(miCarrito)