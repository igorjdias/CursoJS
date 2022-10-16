// novo recurso do ES2015
// desestruturando de um objeto utiliza chaves
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tirar os atributos dentro da chave da variavel (constate) pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // pode apelidar também dessa forma, para puxar pelos apelidos
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // pode fazer uma colocação de variaveis que não existem dentro da estrutura, mas vai retornar como não definida.
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num) 



