const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1010 - calculo de simples */

let [codPeca, qtdePeca, precoPeca] = lines.shift().split(" ");
let [codPeca2, qtdePeca2, precoPeca2] = lines.shift().split(" ");

let calculoDeQtde = precoPeca * qtdePeca;
let calculoDeQtde2 = precoPeca2 * qtdePeca2;

let somaTotal = calculoDeQtde + calculoDeQtde2;

console.log(`VALOR A PAGAR: R$ ${somaTotal.toFixed(2)}`);



