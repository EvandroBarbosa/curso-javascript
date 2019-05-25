//Conceito de null e undefined
let valor

//Conceito de undefined com não foi atribuido nenhum valor a variavel
//vai dar undefined
console.log(valor)

//Null significa que a variavel não possuem nenhuma referencia 
//a um endereço de mermória
valor = null
console.log(valor)

const produto = {}
//Como eaas propriedade não foi definida ainda no objeto vai dar undefined
console.log(produto.preco)
console.log(produto)

produto.preco = 5.95
console.log(produto)

//Isso dever ser evitado, deixando que a propria linguagem a defina
produto.preco = undefined //Evitar atribuir undefined a suas variaveis
//se for tipo numerico atribua 0
console.log(!!produto.preco)
console.log(produto)

