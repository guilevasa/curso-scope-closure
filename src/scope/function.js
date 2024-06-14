function greeting() {
    let userName = 'Ana'; // variable declarada e inicializada dentro de la funcion
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); // no servira querer llamar la variable por fuera de la funcion ya que fue creada dentro de la funcion