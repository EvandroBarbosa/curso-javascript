//Tipos Booleanos no JavaScript
//literal false
let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
//Como saber se o 1 é verdadeiro 
//na variavel ha um number 
//Para saber se o valor da variaveis é verdadeiro ou false
//Temos que usar a negação da negação
//Exemplo
console.log(!!isAtivo)

//Os Verdadeiros 
console.log('Os verdadeiros....')
//todos os numeros inteiros são verdadeiros
//Com execao do 0
console.log(!!7)
console.log(!!-7)
console.log(!!' ') //Espaço vazio é verdadeio
console.log(!![])//Arrays verdadeiro
console.log(!!{})//Objetos é verdadeiro
console.log(!!Infinity)
console.log(!!(isAtivo = true))//Esses são os verdadeiro no javascript

//Os falsos no javascript
console.log('Os falsos.....')
console.log(!!0)
console.log(!!'')//String vazia é falsa
console.log(!!null)//Nulo é interpretado como falso
console.log(!!NaN)//É falso
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))//Pode usar expressão logica 

let nome = ''
//Como uma string vazia é falsa ele mostrar o valor verdadeiro
//Isso ser para verificar se uma string esta vindo vazia ou não
console.log(nome || 'Desconhecido')