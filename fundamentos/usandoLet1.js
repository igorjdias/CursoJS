var numero = 1
{
    let numero = 2 //let vai puxar do bloco interno var busca do escopo geral
    console.log('dentro =', numero)
}
console.log('fora =', numero)