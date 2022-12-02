// con Promises
const leerCarta=function(carta){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(carta.split("").reverse().join(""))
        },2000);
    });

}

const construirJuguete=function(instruccion){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const juguete = instruccion.split("").reverse().join("");
            if (juguete.includes("madera")){
                return resolve(`${juguete} de madera fina`);
            }
            else if (juguete.includes("xbox")){
                return resolve(`no te puedo mandar tu ${juguete}`);
            }
            else {
                return resolve(`Aqui tienes tu cosa esta ${juguete}`);
            }
        },5000);
    })
}

function envolverRegalo(juguete){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${juguete} envuelto`);
        },3000)

    })
}

leerCarta("xbox Series X")
    .then((instruccion)=>{
        return construirJuguete(instruccion);
    })
    .then((juguete)=>{
        return envolverRegalo(juguete);
    })
    .then(console.log);