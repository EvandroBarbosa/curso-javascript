//Template Strings 
const nome = 'Evandro'
//Fazer isso com uma o duas variaveis até que dá
//Mas se você tiver mais de duas variaveis para concatenar, essa estrutura já fica dificil de le
const concatenacao = 'Olá ' + nome + '!'

//Para melhorar isso o ecmaScript criou o template string
//Ao invez de usa as aspas usa-se o crase 
//Exemplo 
const template = `
    Olá 
    ${nome}!` // Veja que você pode fazer quebra de linha e espaço
console.log(concatenacao, template)

//Com o template string, permite o uso de expressões dentro do template
//Exemplo
console.log(` 2 * 5 = ${2 * 5}!`)

//Pode usar funções 
const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)