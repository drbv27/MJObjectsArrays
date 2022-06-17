//array destructuring -  al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo.

const edades = [44,17,25,31];

const [diego,juan,maria,laura] = edades;

console.log(diego)
console.log(juan)
console.log(maria)
console.log(laura)

//practica realizar un template string

const [ricardo,anita,...elresto] = edades;
console.log(ricardo)
console.log(anita)
console.log(elresto)

//como practica extraer el ultimo y guardar los primeros en un array