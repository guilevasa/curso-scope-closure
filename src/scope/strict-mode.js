// activacion del modo estricto para el desarrollo de codigo

'use strict'; // activacion del modo estricto
pi = 3.1416; // al tener el modo estricto activado, se debera declarar e inicializar una variable
console.log(pi);

function myFunction () {
    return pi = 3.1416; // la variable "pi" al no estar declarada, no podra ser usada si se tiene activado el modo estricto
}

console.log(myFunction());