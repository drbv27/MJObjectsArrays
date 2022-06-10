//hemos visto que en las variables creadas con const una vez definida no se puede reasignar valor
//pero en los objetos hay un coportamiento diferente, porque si puedo reasiganar valores a las llaves


const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
}

console.log(producto1)

producto1.disponible = false;
console.log(producto1)//si s epuede modificar las llaves a no ser que....