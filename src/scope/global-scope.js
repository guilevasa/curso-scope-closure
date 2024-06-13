// variables

var a; // declaracion
var b = 'b'; // declaracion e inicializacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope

// en este caso, la variable "fruit" es global, podra ser utilizada en cualquier parte del codigo
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();
console.log(fruit);

// funcion con variable dentro sin ser declarada
function countries() {
    country = 'Colombia'; // se crea variable pero NO se declara, por ende queda automaticamente definida como una variable GLOBAL
    console.log(country);
}

countries();
console.log(country);