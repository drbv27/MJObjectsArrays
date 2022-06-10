//como hacemos el destructuring de objetos anidados?

const producto1 = {
    nombre:"Monitor de 21",//ojo es importantisimo separar con comas o sino nos da un error
    precio:120,
    disponible:true, //no es obligatoria la ultima , pero se aconseja
    informacionA: {
        peso:"1kg",
        origen:"china",
        fabricacion:2019,
        medidas:{
            largo:"50cm",
            alto:"25cm",
            profundo:"5cm"
        }
    }
}

const { nombre,informacionA,informacionA:{peso,origen,fabricacion,medidas:{largo,alto,profundo}} } = producto1;

console.log(nombre)
console.log(informacionA)
console.log(peso)
console.log(largo)