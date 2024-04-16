class Mascota{ 
    constructor (tipo, edad, nombre) {
        this._tipo = tipo;
        this.edad = Number(edad);
        this.nombre = nombre;
    }

    comer(){
        console.log(`${this.nombre} estoy comiendo`)
    }
    static dormir(){
        console.log("Estoy durmiendo zzzz")
    }

    get getEdad() {
        return this.edad;
    }

    set setEdad(newEdad) {
        this.edad = newEdad;
    }
}


const newMascota = new Mascota("gato", 5, "Miau");

console.log(newMascota.tipo);

class Gato extends Mascota {
    constructor (tipo, edad, nombre, maullar, color, vidasRestantes){
        super(tipo, edad, nombre)
        this.maullar = maullar;
        this.color = color;
        this.vidasRestantes = Number(vidasRestantes);
    }
}

const mariaGato = new Gato("gato", 4, "Alue", "Si", "Gris", "5");

console.log(mariaGato.nombre);
mariaGato.comer();
//mariaGato.dormir();  ERROR, STATIC SOLO AFECTA A LA CLASE ORIGINAL

console.log(mariaGato.getEdad);
//mariaGato.setEdad = 5;
mariaGato.edad = 5;
console.log(mariaGato.getEdad);
console.log(mariaGato.color);
//console.log(newMascota.vidasRestantes); ERROR SOLO PODEMOS ACCEDER DESDE GATO YA QUE DE HIJO A PADRE NO HEREDAN ESTANCIAS Y MÉTODOS

