/**
 * Esqueleto exercicios 
 */
const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
// varios valores em uma linha separados por um espaço
// let [var1, var2, var3, var4] = lines.shift().split(" ");

// para linhas com um unico valor
// let notaExame = lines.shift()

/** 1002 - area do Circulo */

// variables 
let raio = lines.shift();
let pi = 3.14159;
let raio2 = Math.pow(RAIO, 2);
let area = pi * raio2;
console.log(`A=${area.toFixed(4)}`); 
