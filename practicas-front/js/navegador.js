//Encontrar elementos del navegador con js

const titulo = document.getElementById('titulo');
const parrafo = document.getElementsByTagName('p');
const links = document.getElementsByClassName('links');

//cambiar valores de HTML

titulo.innerHTML="titulo cambiado";

document.getElementById("demo").innerHTML="The text in first paragraph (index 0) is: "+parrafo

links[0].href="google.com";
links[0].target="_blank";

//cambiar estilos
titulo.style.color=red;

//eventos

function cabiarTexto(obj){
    obj.innerHTML="Texto clickeado"
}

function mOver(obj){
    obj.innerHTML="Mouse over now";
}

function mOut(obj){
    obj.innerHTML="Mouse out"
}

function mDown(obj){
    obj.style.backgroundColor="#1ec5e5";
    obj.innerHTML="sueltame"
}

function mUp(obj){
    obj.style.backgroundColor="#d94a38";
    obj.innerHTML="gracias"
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", ()=> alert("Hola Explorers"));

function alerta(){
    alert("alerta");
}