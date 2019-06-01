//Trtatamento de erro no javascript
function tratarErro(erro){
    throw  'Deu algo errado!!'
}

function imprimirAlgo(obj){
    try {

        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErro(e)
    }
}

 const obj = { nome: 'Evandro!!!!!'}
 imprimirAlgo(obj)