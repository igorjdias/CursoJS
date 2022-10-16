function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // nessa validação só vai inventer os valores de max e min se o min for maior que o max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())