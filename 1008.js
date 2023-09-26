/**
 * Esqueleto exercicios 
 */
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1007 - calculo de salario */

let funcionarioNum = parseInt(lines.shift());
let horasTRabalhadas = parseInt(lines.shift());
let valorHoraTrabalhada = parseFloat(lines.shift());

let calculoDoSalario = valorHoraTrabalhada * horasTRabalhadas;

console.log(`NUMBER = ${funcionarioNum}`);
console.log(`SALARY = U$ ${parseFloat(calculoDoSalario).toFixed(2)}`); 
