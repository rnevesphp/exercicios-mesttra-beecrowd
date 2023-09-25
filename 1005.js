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

let A = Number.parseFloat(lines.shift());
let B = Number.parseFloat(lines.shift());
console.log(`Nota A = ${A}\nNota B = ${B}`);

let pesoA = 3.5;
let pesoB = 7.5;

let finalA = Number.parseFloat(A * pesoA * 1);
let finalB = Number.parseFloat(B * pesoB * 2);

let media = finalA + finalB / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);

