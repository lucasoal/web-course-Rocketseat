// MANIPULANDO ARRAYS

// CRIAR ARRAY COM CONSTRUTOR

// let myArray = ['a','b','c']
// console.log(myArray)

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

let myArray2 = new Array(10)
console.log(myArray2)

// CONTAR ELEMENTOS DO ARRAY
console.log(['a', 'b', 'c'].length)

// TRANSFORMAR CARACTERES EM ELEMENTOS
let word = 'abcdefghijklmnopqrstuvwxyz'
console.log(Array.from(word))


let techs = ["html", "css", "js"]
console.log(techs)
// ADICIONAR ITENS NO FIM
techs.push("nodejs")
console.log(techs)

// ADICIONAR ITENS NO COMEÇO
techs.unshift("sql")
console.log(techs)

// REMOVER ITENS DO FIM
techs.pop("")
console.log(techs)

// REMOVER ITENS DO COMEÇO
techs.shift()
console.log(techs)

// PEGAR SOMENTE ALGUNS ELEMENTOS DO ARRAY
console.log(techs.slice(1,3))

// REMOVER 1 OU + ITENS DE QUALQUER POSICAO
techs.splice(1,2)
console.log(techs)

// // ENCONTRAR A POSICAO DE UM ELEMENTO
let index = techs.indexOf("html")
console.log(index)