// funcion que permite calcular un vlr dado por parametro con el ppal total previamente guardado
// un "closure" se crea cuando una función cualquiera accede a una variable fuera de su contexto.

function moneyBox() {
    
    let saveCoins = 0; // se crea var donde se guarda el vlr total

    function countingCoins(coins) { // se pasa por parametro el vlr
        saveCoins += coins; // el vlr por parametro (coins) se le suma al vlr total previamente guardado (saveCoins)
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countingCoins; // se retorna la operacion de sumar el vlr por parametro con el guardado previamente
}

const myMoneyBox = moneyBox(); // se crea var adicional para que guarde solo en ella el proceso
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const anaMoneyBox = moneyBox(); // se crea 2da var adicional para que guarde solo en ella el proceso
anaMoneyBox(10);
anaMoneyBox(20);
anaMoneyBox(30);