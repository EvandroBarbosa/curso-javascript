function rand({min = 0, max = 100}){
    const valor = Math.random(6) * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 60, min: 1}
console.log(rand(obj))
console.log(rand({min: 60}))
console.log(rand({}))