// Aula sobre numeros Booleanos ( verdadeiro e falso )
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para fiinalizar....')
console.log(!!('' || null || 0 || ' '))
console.log(!!(3 && ' '))

//Puxando a lógica do Ou ||
let nome = ''
console.log(nome || 'Desconhecido')

