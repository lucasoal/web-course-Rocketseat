// EXPRESSÕES E OPERADORES

console.clear();

// NEW
// CRIA UM NOVO OBJETO

let name = new String('Lucas')
let age = new Number(21)
let date = new Date('2021-02-06')

console.log(name, age, date)

// TYPEOF
console.log(typeof ('Teste'))

// DELETE
const person = {
    name: 'Lucas',
    age: 21
}

delete person.age

console.log(person)

// OPERADORES ARITIMÉTICOS

// mult
console.log(3 * 2.5)
// div
console.log(3 / 2.5)
// sum
console.log(3 + 2.5)
// sub
console.log(3 - 2.5)
// resto da divisao
console.log(3 % 2.5)
// exponencial
console.log(2 ** 3)

// incremento
let increment = 10
increment++
console.log(increment)
// decremento
let decrement = 10
decrement--
console.log(decrement)

// GROUPING OPERATOR ()

let total = (2 + 3) * 5
console.log(total)

// OPERADORES DE COMPARAÇÃO
// IRÁ COMPARAR VALORES E RETORNAR UM BOOLEAN COMO RESPOSTA

let one = 1
let two = 2

// igual
console.log(one == two)
// diferente
console.log(one != two)
// estritamente igual
console.log(one === two)
// estritamente diferente
console.log(one !== two)
// maior
console.log(one > two)
// maior igual
console.log(one >= two)
// menor
console.log(one < two)
// menor igual
console.log(one <= two)

// ATRIBUIÇÃO (ASSIGNMENT)

let x

// assignment
x = 1
console.log(x)
// addition
x += 2
console.log(x)
// subtraction
x -= 1
console.log(x)
// multiplication
x *= 2
console.log(x)
// division
x /= 3
console.log(x)
// resto
x %= 6
console.log(x)
// exponential
x **= 7
console.log(x)

// OPERADORES LÓGICOS

let pao = true
let queijo = true

// and
console.log(pao && queijo)
// or
console.log(pao || queijo)
// not
console.log(!pao, !queijo)

// OPERADOR CONDICIONAL (TERNARIO)

const niceBreakfest = pao && queijo ? 'Café completo!' : 'Café incompleto'
console.log(niceBreakfest)

const niceBreakfest2 = (!pao, !queijo) ? 'Café completo!' : 'Café incompleto'
console.log(niceBreakfest2)

// OPERADOR DE STRING

console.log('a' == 'a')
console.log('a' + 'b')

// FALSY (false, 0, -0, "", null, undefined, NaN)
// QUANDO O VALOR É CONSIDERADO FALSE EM CONTEXTOS ONDE UM BOOLEANO É OBRIGATÓRIO
// (CONDICIONAIS E LOOPS)

console.log(false ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')

// TRUTHY (true, {}, [], 1, 2.3, "0", "false", -1, Infinity, -Infinity)
console.log(true ? 'verdadeiro' : 'falso')
console.log([] ? 'verdadeiro' : 'falso')

// PROCEDENCIA DE OPERADORES
// ()
// ! ++ --
// * /
// + -
// < <= > >=
// == != === !==
// &&
// ||
// ?:
// = += -= *=

console.log((2 + 5) * 10)
console.log(3 > (2 > 1))