console.log(Math.ceil(6.1)) // função para elevar o numero para o teto (maior)

const obj1 = {}
obj1.nome = 'Bola'
//obj1 ['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // utilizando o this a variavel nome fica publica, podendo ser utilizada fora da chave(objeto)
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()