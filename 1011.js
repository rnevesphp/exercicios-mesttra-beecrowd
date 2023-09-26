const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1011 - calculo esfera */

let raio = lines.shift();

let pi = 3.14159;
let raioElevado = Math.pow(raio, 3);
let formula = (4.0 / 3) * pi * raioElevado;

console.log(`VOLUME = ${formula.toFixed(3)}`);