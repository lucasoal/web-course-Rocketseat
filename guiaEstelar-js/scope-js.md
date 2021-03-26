# Scope

* ## **Determina a visibilidade de alguma variável no JavaScript**

## **Block statement**

``` js 
// criando um bloco
{ código dentro do bloco }

{ 
    let x = 0
    console.log(x)
}

```

## **var**

É global e poderá funcionar fora de um escopo de bloco!!!
* hoisting (le primeiro a variável)
* é como se ele pegasse a declaração de `var x` e colocasse no início do código para ela ser global
* dentro do escopo, `x = 0`

``` js 
console.log('>existe x antes do bloco?', x)
    {
        var x = 0
    }
console.log('>existe x depois do bloco?', x)

```

## **let**

É local, portanto só funcionará no escopo onde foi declarada
``` js 

console.log('>existe y antes do bloco?', y)
    {
        let y = 0
    }
console.log('>existe y depois do bloco?', y)

```
## **const**

É local, portanto só funcionará no escopo onde foi declarada
``` js 

console.log('>existe z antes do bloco?', z)
    {
        let z = 0
    }
console.log('>existe z depois do bloco?', z)