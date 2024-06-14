// Declaracion e inicializacion con variables tipo VAR

var firstName; // solo declaracion de variable
firstName = 'Oscar'; // inicializacion de la variable
console.log(firstName);

var lastName = "David"; // declaracion e inicializacion de la variable
lastName = "Ana"; // reinicializacion o reasignacion de la variable
console.log(lastName);

var secondName = "David"; // declaracion e inicializacion de la variable
var secondName = "Ana"; // reinicializacion o reasignacion de la variable
console.log(secondName);


// Declaracion e inicializacion con variables tipo LET

let fruit = "Apple"; // declaracion e inicializacion de la variable
fruit = "Kiwi"; // reinicializacion o reasignacion de la variable
console.log(fruit);

let fruit = "Banana"; // la redeclaracion y reinicializacion de una variable de tipo "let", no se puede realizar
console.log(fruit);


// Declaracion e inicializacion con variables tipo CONST

const animal = "Dog"; // declaracion e inicializacion de la variable
animal = "Cat"; // reinicializacion o reasignacion de la variable tipo "const" no se puede, mostrara error
console.log(animal);

const animal = "Snake"; // la redeclaracion y reinicializacion de una variable de tipo "const", tampoco se puede realizar
console.log(animal);

// En el caso de que la variable de tipo "const" sea un array, se le permite realizarle "arreglos"

const vehicles = []; // declaracion e inicializacion, inicializacion vacia para la variable
vehicles.push("Ford"); // se registra un elemento a la variable array con el metodo "push()"
console.log(vehicles);

vehicles.pop(); // se elimina el unico elemento que habia en la variable array con el metodo "pop()"
console.log(vehicles);