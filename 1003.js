/**
 * Esqueleto exercicios 
 */
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/** 1003 -  Soma Simples*/

let A = Number(lines.shift())
let B = Number(lines.shift());

let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);