//veamos algunos metodos de arrays utiles

const carrito = [
    {nombre:"monitor 21 pulgadas",precio:130},
    {nombre:"tablet 8 pulgadas",precio:65},
    {nombre:"parlantes bt",precio:250},
    {nombre:"teclado wireless",precio:40},
    {nombre:"smarthphone",precio:500},
]

//como recorremos un array de forma tradicional

for(let i=0;i<carrito.length;i++){
    console.log(`Articulo: ${carrito[i].nombre} Precio: ${carrito[i].precio}`)
}

//js tiene sus propios metodos para recorrer....el primero se llama forEach

//con forEach
// elArray.forEach(function(nombre para los elemntos){ que quiero hacer })

carrito.forEach(function(item){
    console.log(`El articulo: ${item.nombre}, tiene un precio de $${item.precio}`)
})
