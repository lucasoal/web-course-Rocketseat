// FUNÇÕES CONSTRUTORAS
// CRIAM NOVOS OBJETOS

/*
    function () constructor

    * expressão new
    * cria novo objeto
    * this keyword
*/

// lucas FAZ REFERENCIA A UM OBJETO DO TIPO Person
const lucas = new Person("Lucas") // 
const jojo = new Person("Jojo")

console.log(lucas.walk())
console.log(jojo.walk())

function Person(name) {
    // this faz referencia a variavel lucas
    // FAZ REFERENCIA A VARIAVEL QUE REFERENCIA O OBJETO
    this.name = name

    // 
    this.walk = function() {
        return this.name + " está andando"
    }
}

