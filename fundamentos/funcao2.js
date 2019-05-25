//Armazenando funcao em uma variavel
const imprimirSoma = function(a, b) {
    return a + b
}
console.log(imprimirSoma(7, 9))

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 3))

//Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(9, 8))

//Reduzindo ainda mais a arrow function
const imprimir = a => console.log(a)
imprimir('Isso não muito Legal em!!')