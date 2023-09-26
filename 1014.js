const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1014 - km por litros */

let km = lines.shift();
let lt = lines.shift();

let litrosXkm = km / lt;
console.log(`${litrosXkm.toFixed(3)} km/l`); 