
//Para definir una función basica tradicional seguido de js
// void significa que no regresa nada en la función
function addNumbers(a: number, b:number) {
    return a + b;
}

//Indicar función de fecha y indicar que la funcion va regrear un string
const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`; //Los vaktips ` ` permite hacer los caracteres multilinea y una inyección de expresión dentro de ts
}

//La función multiply siempre pida el 1er num, 2do opcional y la base si no se recibe se va a poner por defecto un valor de 2
function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}


//const result: number = addNumbers(99, 1);
//const result2: string = addNumbersArrow(52, 33);
//const multiplyResult: number = multiply(37);

//Al poner {} para imprimir como un objeto
//console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    pv: number;
    showPv: () => void; //con el void no regresa nada
}

const healCharacter = ( character: Character, amount: number ) => {

    character.pv += amount;

}

const strider: Character = {
    name: 'Strider',
    pv: 100,
    //Definir método, this hace referencia al objeto
    showPv() {
        console.log(`Puntos de vida ${ this.pv }`);
    }
}

healCharacter( strider, 50 );
healCharacter( strider, 50 );

strider.showPv();

export {};