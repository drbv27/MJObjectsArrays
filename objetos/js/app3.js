const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

//asignar a variables las propiedades de un objeto 

//const nombre = producto1.nombre;

//console.log(nombre)

//Otra forma de hacerlo y que es relativamente nueva es con algo que se llama object destructuring...
//Destructuring significa sacar de una estructura, puede ser compleja , no lo es tanto sobretodo cuando se practica


//const { precio } = producto1;

//console.log(precio)

//si quieren extraer varios, simplemnete separan por comas

//const { nombre,disponible,precio } = producto1;

//esto equivaldria:
/*
const nombre = producto1.nombre
const precio = producto1.precio
const disponible = producto1.disponible
*/


//ejemplo

const persona = {
    nombre:"Diego",
    apellido:"Bonilla",
    edad:44,
    casado:true,
    hijos:1,
    profesion:"Desarrrollador MERN"
}

//HACER UN DESTRUCTURING
//LUEGO MOSTRAR POR CONSOLA LOS DATOS EN UNA FRASE CON UN TEMPLATE STRING

// Diego Bonilla tiene 44 años, tiene 1 hijo, y su profesion es Desarrollador MERN

const {nombre,apellido,edad,casado,hijos,profesion} = persona;

const msg = `Hola soy: ${nombre} ${apellido} tengo ${edad} años, tengo ${hijos} hija y soy ${profesion}`

console.log(msg)