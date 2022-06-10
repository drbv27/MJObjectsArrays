// es la otra estructura muy importante en JS
//sirve para agrupar elementos del mismo tipo (no necesariamente)

//como crear un arreglo PRIMITIVAMENTE

const numeros = [10,20,30,40,50];
console.log(numeros)

//un array de strings

const dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

console.log(dias)

//no es obligatorio que un array tenga el mismo tipo de datos

const deTodito = ["Hola",17,true,"yes",null,{nombre:"Diego",apellido:"bonilla"},[1,2,3,4]]
console.log(deTodito)

//existe una forma OB que no es tan comun

const meses = new Array("Enero","Febrero","Marzo")
console.log(meses)