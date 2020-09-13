class Coche {
    
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;    
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura() {
        return `La altura del bus es ${this.altura}`;
    }
}

var autobus1 = new Autobus('Pegasus', 200, 2012);
console.log(autobus1);
console.log(autobus1.mostrarAltura());

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Ram', 250, 2019);
var coche4 = new Coche('Ford', 270, 2020);


console.log(coche1);

document.write(`<h2>${coche1.velocidad}</h2>`);

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1);

document.write(`<h2>${coche1.velocidad}</h2>`);
