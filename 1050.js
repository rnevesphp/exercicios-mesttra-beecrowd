const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let dddEntrado = Number(lines.shift());

switch (dddEntrado) {
    case 61:
        console.log('Brasilia');
        break;
    case 71:
        console.log('Salvador');
        break;
    case 11:
        console.log('Sao Paulo');
        break;
    case 21:
        console.log('Rio de Janeiro');
        break;
    case 32:
        console.log('Juiz de Fora');
        break;
    case 19:
        console.log('Campinas');
        break;
    case 27:
        console.log('Vitoria');
        break;
    case 31:
        console.log('Belo Horizonte');
        break;
    default:
        console.log('DDD nao cadastrado');
}