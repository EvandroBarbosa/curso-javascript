//Destructuring novo recurso do ES2015

const pessoa = {
    nome: "Evandro",
    idade: 30,

    endereco: {
        logradouro: "Centro",
        numero: 777
    }
}

//Usando Destructuring 
//Aqui desistruturado do objeto o nome e a idade
const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

//Mas se a variavel não exitir no objeto vai dar erro?
//No Javascript não dar erro apenas vai dar undefined
const { sobrenome, apelido } = pessoa
console.log(sobrenome, apelido)

//tem como desistrutura o endereço também
//Sim
const { endereco: { logradouro, numero}} = pessoa
console.log(logradouro, numero)