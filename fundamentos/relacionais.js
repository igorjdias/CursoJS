console.log('01)', '1' == 1) // '1' é igual a 1 = verdadeiro pois ele está verificando o numero dentro da string
console.log('02)', '1' === 1) // '1' é mesma coisa que 1 = falso, pois agora ele está verificando que string é diferente de number
console.log('03)', '3' != 3) // '3' é diferente de 3 = falso, pois ele está validando o valordentro da string
console.log('04)', '3' !== 3) // '3' é diferente de 3 = agora ele está validando que string é diferente de number

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)
