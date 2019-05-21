//Alguns cuidados que você precisa ter com numeros no javascript
console.log(7 / 0) //Isso não gera um erro, no javascript é considerado inifito
//É possivel usar uma operação matematica numa string dentro do javascript
//desde que ela seja um numero isso teria o resultado de 5
console.log('10' / 2)
//Mas se tiver algo desse jeito ele não vai identificar como um numero
console.log('10,2' / 2) 

console.log('3' + 3) //Nesse caso especifico a string prevalesse e o numero é apenas concatenado com a string
console.log('3' - 2) //Aqui ele faz as subtração 

console.log("show" * 2) //Isso não é possivel
console.log(0.1 + 0.7) //Isso não geraria um 0.8 devido ha algumas especificações IEEE

/*
console.log(10.toString(2))
isso é um argumento invalido
*/

//Isso é valido usando um valor literal 
//Ao inves de uma variavel
console.log((10.999).toString(2))