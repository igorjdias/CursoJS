// definir em função
function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // puxar entre valores definidos
console.log(rand({min: 955})) // definir somente o minimo pois o maximo já está como 1000
console.log(rand({})) // vai puxar o valor parametrizado de 0 a 1000
console.log(rand())  // vai da erro pois não tem objeto definido