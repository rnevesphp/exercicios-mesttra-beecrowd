const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);


// 1035

let [A, B, C, D] = lines.shift().split(" ");

if ((B > C) && (D > A)) {
    if ((C + D) > (A + B)) {
        if ((C + D > 0) && (A + B > 0)) {
            if ((A / 2 === 0)) {
                console.log(`Valores aceitos`);
            }
        }
    }

} else {
    console.log(`Valores nao aceitos`);
}