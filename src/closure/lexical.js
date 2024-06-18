// revision del ambito "lexical" que es el orden de como se puede ir teniendo acceso a las diferentes vars creadas en diferentes ambitos

const myGlobal = 0;

function myFunction() { // funcion donde se puede tener acceso a la var global
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // funcion interna, donde se puede tener acceso a las vars dentro de myFunction y a la global
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() { // funcion donde se puede tener acceso a las vars dentro de parent, myFunction y a la global
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();