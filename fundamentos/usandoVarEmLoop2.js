const array = []

for(var i = 0; i < 10; i++){
    array.push(function(){
        console.log(i)
    })

}
//Como i é uma variavel tipo var nesse casse sem limitação por escopo de bloco
//será impresso o ultimo valor de i independente da posição 
//representada no array abaixo;
array[2]()
array[9]()