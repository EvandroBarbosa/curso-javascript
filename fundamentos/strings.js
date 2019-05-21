//Conhecendo o tipo string no javascript
//Como o tipo number o tipo string também possuem varias funções disponivel
const escola = "W3Schools"

//Usando a função charAt do tipo string
//Essa função te retorna a caracter na posição informada
console.log(escola.charAt(3))

//Se você passar uma posição que não possuem na palavra ele ter retorna vazio
//E não um erro
console.log(escola.charAt(9), '...nada a ser mostrado')

//Descobrindo a representação da letra na tabela asci
console.log(escola.charCodeAt(4))
//Descobrindo a posição da letra na palavra
console.log(escola.indexOf('s'))

//Usando a função substring
//Ele apresenta a informação apartir do indice informado
console.log(escola.substring(2))
console.log(escola.substring(0, 7))

//Concatenando a string
console.log('Escola de linguagem de programação '.concat(escola).concat('!'))
console.log("Escola de linguagem de programação " + escola + '!')

//Com essa função você substitue um caracter da palavra pelo informado
console.log(escola.replace(3, 'tres'))
//Cria um array e a função split serve como separdo de cada elemento do array
console.log('Um,Dois,Três'.split(','))