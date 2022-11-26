let nombres = {
    nombre: 'Jesús',
    apellido:"Guzmán"
}

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));
console.log(nombres);

function perro(nombre, edad){
    perro.nombre = nombre;
    perro.edad =edad;
}


perro.prototype.habla= function(){
    return "wof wof soy un perro";
}

let firulais = new perro('Firulais',9);
console.log(firulais)
console.log(firulais.habla())