const escola = "Cod3r"

console.log(escola.charAt(4)) // caracters que está na posição definida ex o caracters 4 (r)
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // codigo da tabela Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // a partir do numero definido a frente
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //concatenar (juntar)
console.log(escola.replace(3, 'e')) // trocar string por letra ( pode usar '/\d/' para substituir todos os digitos por caracters)

console.log('Ana,Maria,Pedro'.split(',')) // gerar Array