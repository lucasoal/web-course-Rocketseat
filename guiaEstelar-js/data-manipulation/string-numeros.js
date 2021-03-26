// MANIPULANDO STRING E NUMEROS

// STRING -> NUMERO
let string = "40028922"
console.log(Number(string))
// NUMERO -> STRING
let number = 123
console.log(String(number))

// CONTAR CARACTERES

let word = "paralelepipedo"
console.log(word.length)
let number1 = 12345
console.log(String(number1).length)

// TROCAR . POR ,

let number2 = 213.243434
console.log(number2.toFixed(2)) // MOSTRA X CASAS DECIMAIS DEPOIS DO .
console.log(number2.toFixed(2).replace('.', ','))
console.clear

// MINUSCULA PARA MAIUSCULA

let word2 = 'Programar eh legal'
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())

// VERICAR PALAVRA ESPECIFICA

let phrase = "Eu quero viver!"
console.log(phrase.includes("Viver"))
console.log(phrase.includes("viver"))


// SEPARANDO STRINGS
// SEPARAR TEXTO QUE CONTEM ESPAÇOS EM UM ARRAY ONDE CADA
// TEXTO É UMA POSICAO DO ARRAY. DEPOIS, TRANSFORMAR O ARRAY EM TEXTO
// E COLOCANDO '_' NO LUGAR DO ESPAÇO

let phrase2 = "Eu quero viver!"
let myArray = phrase.split(" ") // DIVIDE TIRANDO OS ' '
console.log(myArray)
let phraseUnderscore = myArray.join('_')
console.log(phraseUnderscore)