/**
 * Esqueleto exercicios 
 */
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/** 1003 -  Calculo do Produto */

let value1 = Number.parseInt(lines.shift());
let value2 = Number.parseInt(lines.shift());

let PROD = value1 * value2;

console.log(`PROD = ${PROD}`);