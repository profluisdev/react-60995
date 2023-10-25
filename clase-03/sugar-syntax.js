let edad = 18;
let respuesta;

// Tradicional
if(edad >= 18) {
    respuesta = "Es mayor de edad";
} else {
    respuesta = "Es menor de edad";
}

function saludar(nombre) {
    return `Hola ${nombre}`; 
}

// Con Sugar Syntax 

// Con operador ternario
let respuesta2 = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

// Con función flecha
const saludar2 = nombre => `Hola ${nombre}`;

console.log(saludar2("Luis")); 