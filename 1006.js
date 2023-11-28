const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1006 */

let A = Number(parseFloat(lines.shift()));
let B = Number(parseFloat(lines.shift()));
let C = Number(parseFloat(lines.shift()));

let p1 = 2;
let p2 = 3;
let p3 = 5;

let x = (A * p1) + (B * p2) + (C * p3);
let xMedPond = p1 + p2 + p3;

let total = x / xMedPond;

console.log(`MEDIA = ${total.toFixed(1)}`);