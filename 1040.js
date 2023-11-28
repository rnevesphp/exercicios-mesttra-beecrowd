const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/*1040*/

let [n1, n2, n3, n4] = lines.shift().split(" ")

let p1 = 2;
let p2 = 3;
let p3 = 4;
let p4 = 1;

let calculo = (n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4);
let somaDosPesos = p1 + p2 + p3 + p4;
let mediaPond = calculo / somaDosPesos;

if (mediaPond >= 7.0) {
    console.log(`Aluno aprovado`);
} else if (mediaPond < 5.0) {
    console.log(`Aluno reprovado`);
} else if (mediaPond >= 5.0 && mediaPond <= 6.9) {
    let notaExame = lines.shift()
    let novaMedia = notaExame + mediaPond;
    let somaFinalMedia = novaMedia / 2;
    if (somaFinalMedia < 5.0) {
        console.log(`
            Media: ${mediaPond}\n
            Aluno em exame.\n
            Nota do exame: ${notaExame}\n
            Aluno reprovado.\n
            Media final: ${somaFinalMedia}\n
        `);
    } else if (somaFinalMedia >= 5.0) {
        console.log(`
            Media: ${mediaPond}\n
            Aluno em exame.\n
            Nota do exame: ${notaExame}\n
            Aluno aprovado.\n
            Media final: ${somaFinalMedia}\n
        `);
    }
}




