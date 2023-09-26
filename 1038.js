const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);


/* 1038 - lanche */

let [cod, qtde] = lines.shift().split(' ');

let preco1 = 4.00;
let preco2 = 4.50;
let preco3 = 5.00;
let preco4 = 2.00;
let preco5 = 1.50;

if (cod == 1) {
    let total = parseFloat(preco1 * qtde);
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod == 2) {
    let total = parseFloat(preco2 * qtde);
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod == 3) {
    let total = parseFloat(preco3 * qtde);
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod == 4) {
    let total = parseFloat(preco4 * qtde);
    console.log(`Total: R$ ${total.toFixed(2)}`)
} else if (cod == 5) {
    let total = parseFloat(preco5 * qtde);
    console.log(`Total: R$ ${total.toFixed(2)}`)
}