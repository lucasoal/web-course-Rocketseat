// CALLBACK FUNCTION
// CHAMA UMA OUTRA FUNÇAÃO COMO PARAMETRO DA FUNÇÃO ATUAL

// RECURSIVO


// CHAMA A FUNCAO ANONIMA COMO PARAMETRO
function sayMyName(name) {
    console.log('antes da callback')

    console.log(name)

    console.log('depois da callback')
}

// O PARAMETRO DE sayMyName É A FUNÇÃO ANONIMA
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)