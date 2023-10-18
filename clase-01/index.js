// Funciones Tradicionales

function greeting() {
  console.log("Hola a todos");
}

greeting();

function greetingAPerson(name, lastName) {
    console.log(`Hola ${name} ${lastName}`);
}

greetingAPerson("Javier", "Diaz");


const martillo = {
    name: "Martillo",
    property: "Martillo que martilla"
}

// function showObjet(object) {
//     console.log(object.name)
//     console.log(object.property)
// }

function showObjet({name, property}) {
    console.log(name);
    console.log(property);
}

showObjet(martillo);

// Funciones con retorno

function sum(n1,n2) {
    return n1 + n2;
}


console.log(sum(10,6));

let respSum = sum(10,89);

console.log(respSum);

// Spreed operator

const person = {
    name: "Juan",
    age: 22
};

const personFullName = {
    ...person,
    lastName: "Perez"
}; 

console.log(person);
console.log(personFullName);

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
const arr4 = [...arr2, ...arr1];

let arr5 = ["Juan", "Luis", "Pedro"];

let nameUser = "Pepe";

arr5 = [...arr5, nameUser];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);



const person2 = {
    name: "Maria",
    age: 55
};

const { age, name } = person2; 

console.log(name);
console.log(age);