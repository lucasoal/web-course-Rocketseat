# **VARIÁVEIS**

* Nomes simbólicos que recebem um valores
* Atalhos de código
* Identificadores

## **Palavras reservadas para criação de variáveis**
* vat
* let
* const (FIXA!! NÃO ATERA O VALOR)

``` js
    // declara uma variável que recebe o valor "quente"
    var clima = "quente"
        clima = "frio"
        console.log(clima) //saida no console

    let clima = "quente"
        clima = "frio"
        console.log(clima) //saida no console

    const   clima = "quente"
            clima = "frio"
            console.log(clima) //saida no console
```

## **Tipagem dinâmica**

* O tipo de dados já é atribuido assim que se a variável recebe um valor.

``` js
    let clima = ""
    console.log(typeof clima) // verificando o tipo do dado
```

## **Criando nomes de variáveis**

* Pode:
    * iniciar com caracter especial: $ _ 
    * iniciar com letra
    * colocar acento
    * letra maiúscula e minúscula faz diferença

- Não pode:
    * iniciar com números
    * colocar espeços vazios no nome

- Ideal:
    * criar nome que faz sentido
    * que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * escrever em inglês
