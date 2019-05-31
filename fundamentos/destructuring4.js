function rand([min = 0, max =60]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([5, 39]))
console.log(rand([44]))
console.log([, 6])
console.log(rand([]))