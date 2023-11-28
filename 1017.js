const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

// 1017 

let tempoGastoDeViagem = Number(parseInt(lines.shift()))
let velocidadeMedia = Number(parseInt(lines.shift()))

let kilometragemTotal = velocidadeMedia * tempoGastoDeViagem;

let res = kilometragemTotal / 12;

console.log(`${res.toFixed(3)}`)