/**
 * Esqueleto exercicios 
 */
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1006 - diferença entre valores */

let A = lines.shift()
let B = lines.shift()
let C = lines.shift()
let D = lines.shift()

let calculo = ((A * B) - (C * D));

console.log(`DIFERENÇA = ${calculo}`); 