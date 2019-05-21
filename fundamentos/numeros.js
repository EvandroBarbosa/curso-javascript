//Tipo number que representa em javascript inteiros e flutuantes
//Exemplo
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
//O tipo number possuem alguns funções disponivel que poder ser usado
//Exemplo para você saber se um determinado numero é inteiro usa-se
console.log(Number.isInteger(peso1))


//Mais exemplos
const avaliacao1 = 9.838
const avaliacao2 = 7.988

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//A impressão dessa media seria isso
//8.604666666666667 com varias casas decimais
console.log(media)

//Para arendondar o numero com poucas casas decimais após a virgula
//Pode ser usados funções que o tipo Number disponibiliza
//exemplo com a diminuição de casas decimais
//8.60
console.log(media.toFixed(2))

//Transformando a media em binário
console.log(media.toString(2))
console.log(typeof media)

//Number com n maiuscula é uma função 
//number é tipo numerico
console.log(typeof Number)