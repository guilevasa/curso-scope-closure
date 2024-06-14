/* creando las variables de esta forma, al querer mostrarlas, solo se mostrara "fruit1", ya que la variable de tipo "var" puede ser
usada de manera global, y las variables de tipo "let" y "const" solo se pueden usar dentro del bloque ( {} ) donde fueron creadas
function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
*/

// de esta manera, llamando las variables (de tipo let, const) dentro del bloque en que fueron creadas, si se mostraran
function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';

        console.log(fruit2);
        console.log(fruit3);
    
    }
    console.log(fruit1);
}

fruits();