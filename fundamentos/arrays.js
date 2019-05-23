//Tipos Array
const arrays = [8.9, 3.4, 5, 6, 'Opa!']
console.log(arrays[0], arrays[4])
//Se caso você acessar um indice que não esta não existe
//Não vai dar erro 
//Exemplo
console.log(arrays[5])

//Adicionando um valor no array
arrays[5] = 'Tem Valor'
console.log(arrays)
//Verificando o tamanho do array
console.log(arrays.length)

//Um array pode ter diversos tipos de valor
//Como objeto, string, numeros, booleano
//Mas isso não é uma boa pratica fazer isso
//Inserindo valores diversos no array usando a função push
arrays.push({texto: 'Eu sou um Objeto'}, false, null, 'Strings')
console.log(arrays)

//Excluindo um elemento do array
//Usando a função pop que tira o ultimo valor do array e retorna o elemento excluido
console.log(arrays.pop())
console.log(arrays)
//Outra forma de excluir é usando o delete
delete arrays[6]
console.log(arrays)