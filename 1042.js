const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);


/* 1042 - sort */

let [v1, v2, v3] = lines.shift().split(' ');

let valores = [v1, v2, v3];
let arrayOrdenado = valores.sort((a, b) => a - b);

for (let cont = 0; cont < arrayOrdenado.length; cont++) {
    console.log(`${arrayOrdenado[cont]}`);
}

console.log(`\n${v1}\n${v2}\n${v3}`);