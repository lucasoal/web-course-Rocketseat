// ARGUMENTOS E PARAMETROS

// DECLARAR DENTRO DE VARIÁVEIS
// functions SEM UM NOME SÃO CHAMADAS DE ANÔNIMAS

let total = 1

const sum = function(num1, num2){

    let total = (num1 + num2);

    return total;
}

let num1 = 34;
let num2 = 25;

// ARGUMENTS
sum(num1, num2);
sum(20, 50);

console.log(`O num1 é ${num1}`);
console.log(`O num2 é ${num2}`);
console.log(`num1 + num2 = ${sum(num1,num2)}`);

console.log(total); 