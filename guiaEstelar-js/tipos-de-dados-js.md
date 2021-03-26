# TIPOS DE DADOS

## String
- É uma cadeia de caracteres.

``` js
    console.log("Lucas")
    console.log(' "Mostrando as aspas duplas" ')
    console.log(`pode colocar " ou ' e quebras de linha`)
    console.log(`${1 + 1}`)
```

## Number
- São números
    - Inteiros: 2, 23, 40...
    - Float: 1.3, 2.5...
    - NoN: Not a Number
    - Infinity: Infinito

``` js
    console.log(12)
    console.log(12.5 + 33)  
    console.log(12.5 / "string") // NoN    
```
## Boolean
- Sómente 2 valores
    - true:  1
    - false: 0
    
``` js
    console.log(false)
    console.log(true)
```

## Undefined x Null
**Undefined** é um dado não definido
- não sei o que é

**Null** não existe
- não existe!

## Object
- Dado estrutural

- Possui propriedades / atributos
- Funcionalidades / Métodos

```js
    {propriedade "valor"}

    console.log(
        {name:"Lucas",
        idade:21,
        andar:function() {
        console.log("");
        }}
    )
```
## Array
- Lista
- Agrupamento de dados

```js
console.log(["Lucas", 21, "leite", "ovos"])
```