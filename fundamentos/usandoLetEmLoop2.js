const array = []

for(let i = 0; i < 10; i++){
    array.push(function(){
        console.log(i)
    })
}

//Diferente do var o let respeita o escopo de bloco
//e tipo memoria o valor da variavel i em cada posição do array
array[0]()
array[9]()