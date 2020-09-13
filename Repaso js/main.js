/* var nombre = "Isaac Bustamante";
var altura = 178; */

/* var concatenacion = nombre + " " + altura;

var datos = document.getElementById('datos');
datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;


if (altura >= 170) {
    datos.innerHTML += "<h2>Eres una persona alta</h2>";
} else {
    datos.innerHTML += "<h2>Eres una persona baja</h2>";
}

for (let index = 0; index <= 2020; index++) {
    // Bloque de instrucciones
    datos.innerHTML += `<h2>Estamos en el año: ${index}</h2>`;
}
 */
function muestraMiNombre(nombre, edad) {
    let misDatos = `
        <h1>Hola soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mi edad es: ${edad} cm</h3>
    `;

    return misDatos;
}

function imprimir() {
    var datos = document.getElementById('datos');

    datos.innerHTML = muestraMiNombre('Isaac Bustamate', 1.78);
}

imprimir();

var array = ['Victor', 'Isaac', 'Antonio'];

document.write('<h1>Nombres</h1>');
array.forEach(nombre => {
    document.write('<h3>' + nombre + '</h3  >');
});

var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima,this.antiguedad);
    },
    propiedades: "valor aleatorio"
}

document.write(`<h1>${coche.modelo}</h1>`);
coche.mostrarDatos();

console.log(coche);