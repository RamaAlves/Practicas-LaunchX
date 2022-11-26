class Animales {
    #especie='Feliz catus';
    
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
    getEedad(){
        return this.edad;
    }
    setEdad(nuevaEdad){
        this.edad=nuevaEdad;
    }
    getEspecie(){
        return this.#especie;
    }
    setEspecie(nuevaEspecie){
        this.#especie = nuevaEspecie;
    }
    canta(){
        return `${this.nombre} puede cantar`;
    }
    mostrarEdad(){
        return `Tiene ${this.edad} años`;
    }
}

class Gatos extends Animales{
    constructor(nombre, edad, colorBigotes){
        super(nombre, edad);
        this.colorBigotes=colorBigotes;
    }

    bigotes(){
        return `Tengo bigotes color ${this.colorBigotes}`
    }
    especie(){
        return this.getEspecie();
    }
    modEspecie(nuevaEspecie){
        this.setEspecie(nuevaEspecie);
    }
}

let gato = new Gatos('Gato',5, "blanco");
console.log(gato);
console.log(gato.especie());
gato.modEspecie("gat");
console.log(gato.especie());
console.log(gato.canta());
console.log(gato.mostrarEdad());
console.log(gato.bigotes());
