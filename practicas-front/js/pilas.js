/* pilas, el primero en entrar es el primero en salir */

class Pila {
    constructor(){
        this.pila=[]
        this.contador=0;
    }

    //agrega elementos al final de la pila
    push(element){
        this.pila[this.contador] =element;
        this.contador++;
        return this.pila
    }

    //sacar el ultimo elemento y devolverlo
    pop(){
        this.contador--;
        const element = this.pila[this.contador];
        delete this.pila[this.contador];
        return element
    }
    //solo muestra el ultimo elemento
    peek(){
        return this.pila[this.contador-1];
    }

    //devuelve el tamaño de la pila
    size(){
        return this.contador;
    }

    imprimir(){
        console.log(this.pila);
    }
}

let pila1=new Pila()
setTimeout(()=>{pila1.size()}, 500);
setTimeout(()=>{pila1.imprimir()}, 3000);
setTimeout(()=>{pila1.push("auto")},5000);
setTimeout(()=>{pila1.imprimir()},7000);
setTimeout(()=>{pila1.push(5)},9000);
setTimeout(()=>{pila1.imprimir()},11000);
setTimeout(()=>{pila1.pop()},13000);
setTimeout(()=>{pila1.imprimir()},15000);