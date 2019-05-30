//Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaaaaaa muleque' // Contexto Léxico 2
    return saudacao
}

//Objetos são grupos aninhado de par nome/valor
const Cliente = {
    nome: 'Evandro',
    idade: 30,
    peso: 50,
    endereco: {
        logradouro: 'Centro',
        numero: 888
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)