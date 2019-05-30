//Hosting é o comportamento default da linguagem
//pega as declações do tipo var e iça no topo
//exemplo
console.log('a = ', a)
var a = 9
console.log('a = ', a)

//apesar de não ter declarado a variavel a antes de tentar imprimir seu valor
//o comportamento hosting vai pegar a variavel a e inicia-la ante 
//de ser impressa, ela não terar o valor atribuido apos o console
//mas a variavel a ja estará disponivel com valor undefined
//Isso é um comportamento da linguagem.

//Coisa que não ocorre com o let
//Nesse caso a variavel b vai estar indefinida, ainda nãp exite
console.log('b= ', b)//Aqui ocorrerá um erro pois o hosting não ocorre com o let
let b = 'Error'
console.log('b = ', b)
