console.log("\n************************* Variables ******************\n")

var numero1=4;

let numero2=6;

const numero3 =0;

console.log(`numero 1: ${numero1} \nnumero 2: ${numero2} \nnumero 3: ${numero3}`);

console.log("\n************************* Cadenas ******************\n")

let frase1= "ejemplo comillas dobles";
let frase2= 'ejemplo comillas simples';
let frase3= `ejemplo comillas ${numero1} invertidas`;

console.log(`${frase1}\n${frase2}\n${frase3}`)

console.log("\n************************* Condicionales ******************\n")

console.log(numero1 != numero2); //boolean o bool -- true
console.log(numero1 > numero2); //boolean o bool -- false
console.log(numero1 === numero2); //boolean o bool -- false
console.log(numero1 < numero2); //boolean o bool -- true

console.log("\n************************* Operadores lógicos ******************\n")
console.log("\n************************* Operador lógico AND ******************\n")

console.log(true && true); // AND true
console.log(true && false); // AND false
console.log(false && false); // AND false

console.log("\n************************* Operador lógico OR ******************\n")

console.log(true || true); // or true
console.log(true || false); // or true
console.log(false || true); // or true
console.log(false || false); // or false

console.log("\n************************* operadores combinados ******************\n")

console.log(true||false||(true&false)); //true

console.log("\n************************* Arrays ******************\n")

let listaDeNumeros = [2,3,5,7,20,234];
//                    0 1 2 3  4  5

console.log(`lista de numeros ${listaDeNumeros}`);
console.log(`posicion 5 de la lista de numeros ${listaDeNumeros[5]}`);

console.log("metodo push")

listaDeNumeros.push(16);//se agrega el elemento al final de la lista
listaDeNumeros.push(936);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length); //metodo length indica la longitud

console.log("metodo pop")

listaDeNumeros.pop(); //se elimina el ultimo elemento de la lista

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

let listaDePalabras=["explorers","launch X","Mission Comander"]
console.log(listaDePalabras);
console.log(listaDePalabras.length);

console.log("\n************************* Las cadenas se pueden tratar como arrays ******************\n")

let palabra="palabra"
console.log(palabra);
console.log(palabra[2]);// l
console.log(palabra.length);

console.log("\n************************* Objetos ******************\n")

let explorers={
    nombre:"Nombre del Explorer",
    email:"email@innovaccion.mx",
    numReg:12345,
    mission:"FrontEnd",
    proyectos:["Abogabot","Taqueria","Pastelería", "Vacunacion"],
    proPer:{
        escolar:"tareas",
        profesional:"trabajo",
        personal:"Negocios",
        cantidad:3,
    },
}

console.log(explorers);
console.log(explorers.proPer.personal);
console.log(explorers.numReg);
console.log(explorers.proyectos[2]);
console.log(`proyectos ${explorers.proPer.cantidad} ${explorers.proPer.escolar}`);

console.log("\n************************* Flujo condicional ******************\n")

let numer1 = 2;
let numer2 = 6;

console.log("\n************************* If / else ******************\n")

if(numer1 > numer2){
    console.log("El numero 1 es mayor al numero 2");
} else if(numer1===numer2){
    console.log("los numeros son iguales");
} else{
    console.log("El numero 2 es mayor que el numero 1")
}

/* ciclo condicional while */
console.log("\n************************* While ******************\n")

let numberWhile=5;
while (numberWhile<=12){
    console.log(numberWhile);
    numberWhile+=2;
}
console.log("Aquí ya salió del ciclo while")

/* minimo una iteracion */
console.log("\n************************* Do / While ******************\n")

let numberDoWhile=22;

do{
    numberDoWhile+=2;
    console.log(numberDoWhile);
} while (numberDoWhile<20);
console.log("ya salio del ciclo Do While", numberDoWhile);

/* ciclo de iteracion controlada */
console.log("\n************************* for ******************\n")
let numberFor=0;

for(numberFor;numberFor<=12; numberFor= numberFor+1){
    console.log(numberFor)
}
console.log("aqui salimos del ciclo for " + numberFor)

/* opciones para anidar condicionales */
console.log("\n************************* switch ******************\n")

switch(prompt("como esta el clima?")){
    case "lluvioso":
        console.log("no te vayas a mojar");
        break
    case "soleado":
        console.log("ponte bloqueador");
        break
    case "nublado":
        console.log("tapate bien");
        break
    default:
        console.log("no se como esta el clima");
        break
}
console.log("aqui salimos del switch")