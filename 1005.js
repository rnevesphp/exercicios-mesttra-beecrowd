const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1005 */

let A = Number(parseFloat(lines.shift()))
let B = Number(parseFloat(lines.shift()))

let p1 = 3.5;
let p2 = 7.5;

let x = (A * p1) + (B * p2);
let xMedPond = p1 + p2;

let total = x / xMedPond;

console.log(`MEDIA = ${total.toFixed(5)}`);