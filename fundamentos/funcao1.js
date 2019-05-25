//Função sem retorno
function imprimirSoma(a, b ){
    console.log(a * b)
}

//Com javascript é possivel fazer isso que em outras linguagem
//Poderia ser um erro, chegando a nem executar o codigo
//O javascript te dar essa flexibilidade, e não gerar um erro
imprimirSoma(3, 4)
imprimirSoma(5)
imprimirSoma(2, 5, 6, 6, 7, 8)
imprimirSoma()

console.log('\n')

//Função com retorno
//Com o parametro b com valor padrão 
//Isso é possivel desde 2015 com a resolução do ecma
function soma(a, b = 1) {
    return a * b
}

console.log(soma(3, 4))
console.log(soma(5))
console.log(soma())