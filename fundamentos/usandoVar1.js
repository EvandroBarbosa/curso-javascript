//O fato de var esta dentro de varios blocos 
//Não delimita o acesso as essa variavel
{
    {
        { 
            var sera = 'será que é visivel?'
        }
    }
}
console.log(sera)
//Uma variavel do tipo var dentro de um escopo global é acessivel 
//em qualquer local do arquivo javascript
//Ela só será limitada se estiver dentro de uma function
//Nesse caso só será acessivel dentro do escopo da function

function teste() {
    var local = 123
    console.log(local)
}
teste()

//Aqui não seria possivel mostrar o valor dessa variavel
console.log(local)//Esse bloco causará erro!