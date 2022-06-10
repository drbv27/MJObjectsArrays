//supongamos que tenemos un carrito de comparas,

const miCarrito = [];

//añadir elementos

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

//la manera tradicional es con el metodo .push
//siempre adiciona al final

miCarrito.push(producto1)
miCarrito.push(producto2)

console.log(miCarrito)

//para añadir al ppio utlizan .unshift

const producto3 = {
    nombre:"Teclado Wl",
    precio:50,
    disponible:true, 
}

miCarrito.unshift(producto3)
console.log(miCarrito)