//Trabalhando com objetos no javascript
//Este é um objeto vazio
const produto = {}

//Atribuindo propriedade no objeto produto dinamicamento
produto.nome = 'Notbook ACER Aspire-A-512-15'
produto.preco = 3999.00

//{ nome: 'Notbook ACER Aspire-A-512-15', preco: 3999 }
//Um objeto é uma coleção de chave e valor 
console.log(produto)

//Objeto também pode ser criado ja atribuindo as propriedade
//Exemplo
const produto1 = {
    nome: 'Curso JavaScript',
    preco: 399.00,
    instrutor: 'Vandão'
}

console.log(produto1)

//Podemos ter um abjeto dentro do outro
const produto2 = {
    nome: "JavaScript Na veia",
    descricao: 'Aprenda a programar em javascript, uma linguagem interpretada',
    preco: 69.99,
    isbn: 'ja23sc45',

    autor: {
        nome: 'Evandro',
        email: 'evandro@edu.ti',
        telefone: '(11)996435233'
    }
}
console.log(produto2)