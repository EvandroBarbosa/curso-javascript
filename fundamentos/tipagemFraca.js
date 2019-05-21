//A linguagem javascript possuem uma fraca tipagem 
//diferente do java que é bem critico em relação a tipagem
//Nesse exemplo a variavel qualquer vai ser identificada como uma string
let qualquer = 'Tipo String'
console.log(qualquer)

console.log(typeof qualquer)

//Se atribuir um valor numerico pra ela será um number
//exemplo
qualquer = 1000
console.log(qualquer)

//Veraz que aqui ela será numerica sem a necessidade de você informar o tipo
console.log(typeof qualquer)

//Evite nomes generico e siglas que não diz nada 
//Exemplo

let valor = '' //valor do que?
let numero = 2 
let gsb = false //O que isso representa

//Ao criar uma variavel seja claro e objetivo com aquilo que quer representar
//Isso torna seu codigo mais legivel e facil de entender
