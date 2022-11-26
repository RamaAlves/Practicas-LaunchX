/* construir funciones */
const sumar= function(number1,number2){
    return number1+number2;
}

let number1=4;
let number2=5;
let suma=sumar(number1,number2)
console.log(`resultado de ${number1} + ${number2}: ${suma}`)

/* funciones que no reciben ni retornan parametros */

const ruido = function(){
    console.log("kataplum");
}

ruido(); //regresa void(vacio, sin retorno) 

const exponencial = function (base, exponente){
    let resultado=1;
    for (let i = 0; i< exponente;i++){
        resultado*=base;
    }
    return resultado;
}

console.log(exponencial(4,3));

/* orden de declaracion */

console.log(cuadrado(4));
/* si la funcion es nombrada se la puede crear despues de llamarla */
function cuadrado(x){
    return x*x;
}

/* si se hace una funcion flecha se debe crear anter de invocarla */
const restar= (a,b) => {
    return a-b;
}
console.log(restar(4,2));
/* ejemplos con texto */
function saludar(quien){
    console.log("hola "+quien)
}

saludar("Explorer")
saludar("Ramiro")
saludar("Rodrigo")

/* Excepciones */

function preguntaDireccion(pregunta){
    let result=prompt(pregunta);
    if (result.toLowerCase() == "izquierda") return "I" //Si el if se resuelve en una sola linea no hace falta usar llaves
    if (result.toLowerCase() == "derecha") return "D"
    throw new Error ("direccion invalida: "+result) //Error custom
}

function mirar(){
    if (preguntaDireccion("a que lado?")=="I"){
        return "una casa";
    } else{
        return "dos osos hambrientos";
    }
}

try {
    console.log("mira a", mirar());
} catch(error){
    console.log("Hubo un error: " + error);
}

//asincrono
setTimeout(()=> console.log("Tick"), 500);//espera a que pase el tiempo indicado en milisegundos para ejecutar la funcion flecha

let fifteen=Promise.resolve(15);//promesa, resolusion del 15
fifteen.then((value)=>console.log(`Got ${value}`));//se accede al valor de la promesa con .then(funcion/valor)

const promesa = () =>
    new Promise((resolve,reject)=>
        setTimeout(
            ()=> (resolve(console.log("Todo cool")), reject(new Error ('Oops'))),
            2000
        )
    );

async function main(){
    promesa()
        .then(()=>{
            promesa()
                .then(()=> console.log("hola"))
                .catch((err)=> console.error(err))
        })
        .catch((err)=>console.error(err))
    
    await promesa();
    console.log("aqui termina la primer promesa")
    await promesa();
    console.log("aqui termina la segunda promesa")
}

main();