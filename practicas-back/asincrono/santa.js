// con setTimeOut
const leerCarta=function(carta, cb){
    return setTimeout(()=>{
        cb(carta.split("").reverse().join(""))
    },2000);
}

const construirJuguete=function(instruccion, cb){
    return setTimeout(()=>{
        const juguete = instruccion.split("").reverse().join("");
        if (juguete.includes("madera")){
            return cb(`${juguete} de madera fina`);
        }
        else if (juguete.includes("xbox")){
            return cb(`no te puedo mandar tu ${juguete}`);
        }
        else {
            return cb(`Aqui tienes tu cosa esta ${juguete}`);
        }
        callback(juguete);
    },5000);
}

function envolverRegalo(juguete, cb){
    return setTimeout(()=>{
        cb(`${juguete} envuelto`);
    },3000)
}

//Calback Hell
/* leerCarta("carrito de madera", (instruccion)=>{
    construirJuguete(instruccion,(juguete)=>{
        envolverRegalo(juguete, console.log)
    })
}) */

//modularizar las llamadas
//hacer funciones aparte para las llamadas
function construirC (juguete){
    envolverRegalo(juguete, console.log)
}

function leerC(instruccion){
    construirJuguete(instruccion, construirC)
}

leerCarta("carrito de madera", leerC);