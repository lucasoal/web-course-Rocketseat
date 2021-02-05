# **Introdução**

## O que é o CSS

* Cascading Style Sheet;
* Codigo para criar estilos no HTML;
* HTML é uma estrutura, e o CSS é a beleza;
* Não é uma linguagem de programaçao;
* É uma linguagem style Sheet

## Exemplo

Utilize o site do [CodePen](https://wwww.codepen.io/pen)

# Comentários

* Não afeta o código;
* Ajuda lembrar blocos de código;
* Deixa dicas para leitura;
* Ajuda as pessoas a entenderem o projeto;
* Lembre-se de fechar os comentários;
* Estrutura: `/*Comentario*/`

``` css
/*Comentario*/
h1{ color: blue; }
```

# Anatomia

* Seletor [ h1 ]
* Declaration [  {}  ]
* Properties [  color ,  font-size ,  background  ]
* Values [  blue ,  60px ,  gray  ]

``` css
h1{
    color: blue;
    font-size: 60px;
    background: gray;
}
```

# Seletores

Conecta um elemento HTML ao CSS.

## Tipos

* Global selector `*`;
* Element/Type selector `h1, h2, p, div`;
* ID Selector `#box, #container`;
* Class Selector `.red, .m-4`;
* Atribute Selector, Pseudo-class, Pseudo-element...

``` css
* { margin: 0; }

m-40 { margin: 40px; }

h1, h2{
    color: blue;
    font-size: 60px;
    background: gray;
}
```

# Box model

Divisão do layout para interpretar e manipular seu design.

* ## HTML
```html
<h1>Evolua rápido</h1>
<p>Descrição</p>
<button>Embarcar</button>
```
* ## CSS
```css
h1, p{
  border: 1px solid red;
  margin: 100px;
  padding: 50px;
  text-align: center;
}
```

# Adicionando o CSS no HTML

## **`inline`**

``` html
<head></head>
```

``` html
<h1 style="color: red">Título</h1>
```

## **`<style>`**
* atributo `<style>`

``` html
<head>
    <style>
        h1 { color: red; }
        strong { color: blue; }
    </style>
</head>

<body>
    <h1>
        Título <strong>alo</strong>
    </h1>
</body>
```


## **`<link>`**
* tag HTML que irá conter o CSS

* ## HTML
``` html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

* ## CSS
```css
h1 { color: green; }
```

## **`@import`**
* arquivo CSS externo

``` css
@import 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';

h1 { font-family: 'Roboto', sans-serif; }
```

# Cascading

A escolha do browser de qual regra aplicar, caso haja regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo (cascata);

* ## HTML
``` html
<h1>Título</h1>
<p>parágrafo</p>
```

* ## CSS
```css
h1{ color:red; }
h1{ font-size: 12px; color: blue; }
```


## Fatores que são levados em consideração:

- 1.Origem do estilo;
- 2.Especificidade;
- 3.Importância


# Origem

`inline > tag style > tag link`


# Especificidade

É um cálculo matemático, onde cada tipode de seletor e origem do estilo, possuem valores a serem considerados.

* 0. Universal selector, combinators e nagation pseudo-class (:not())
* 1. Element type selector e pseudo-elements (::before, ::after)
* 10. Classes e attribute selectors ([type="radio"])
* 100. ID selector
* 1000. Inline

* ## CSS
``` css
h1{ color:red; }
* { color: green; }
```

# Importância

`!important`

``` css
h1{ color: blue !important; }
```

## **Sobrescreve toda a regra da cascata!!!**

* Cuidado! Evite o uso
* Não é considerado uma boa prática
* Quebra o fluxo natural da cascata


# At-rules

* Está relacionado ao comportamento do CSS
* Começa com o sinal de `@`, seguido do identificador e valor

## Exemplos:

- `@important`    /* incluir um CSS externo */
- `@media`        /* regras condicionais para dispositivos */
- `@font-face`    /* fontes externas */
- `@keyframes`    /* Animation */

``` css
@import url("http://local.com/style.css");
@media (min-width: 500px){};
@font-face{ /* rules here */};
@keyframes animationName {/* rules here */};
```

# Shorthand

* junção de propriedades
* resumido e legível

``` css
h1 {
    background-color: #000;
    background-image:url(images/bg.gif);
    background-repeat:no-repeat;
    background-position:left top;
}
```

``` css
h1 { background: #000 url(images/bg.gif) no-repeat left top; }
```

## Atenção!

* não irá considerar propriedades anteriores
* valores nao especificados irão assumir o valor padrão
* geralmente, a ordem descrita não importa, mas podemos encontrar problemas em caso de muitas propriedades semelhantes


# Funções

* nome seguido de `()`
* recebe argumentos

``` css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

h1 {
    color: red;
    width: 300px;
}
```

# DevTools

Ferramentas do próprio navegador

* [Mozilla DevTools](https://developer.mozilla.org/pt-BR/docs/Tools)

# **Cuidados com a escrita**

``` css
p {
    margin: 0 auto;
    padding-left: 15px;
}
```

# Vendor Prefixes

Permite que browsers adicione `features` a fim de colocar em uso alguma novidade no CSS

- webkit- (Chrome, Safari, versões mais recentes do Opera.)
- moz- (Firefox)
- o- (Versões antigas do Opera)
- ms- (Internet Explorer)

``` css
p {
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -o-background-clip: text;
    -ms-background-clip: text;
}
```

## Consultas
- [Which Vendor Prefix](http://ireade.github.io/which-vendor-prefix/)
- [Can I Use](http://caniuse.com)