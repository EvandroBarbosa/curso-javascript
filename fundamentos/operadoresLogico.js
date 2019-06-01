//Trabalhando com operadores logicos
function fazerCompra(trabalho1, trabalho2){
    const tomarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const compraTv32 = trabalho1 != trabalho2
    const manterSaudavel = !tomarSorvete

    //para retornar todas as variaveis vou criar um objeto
    return {tomarSorvete, comprarTv50, compraTv32, manterSaudavel}
}

console.log(fazerCompra(true, true))
console.log(fazerCompra(true, false))
console.log(fazerCompra(false, true))
console.log(fazerCompra(false, false))