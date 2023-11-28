const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/*
    1015
    Leia os quatro valores correspondentes aos eixos x e y de dois 
    pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, 
    mostrando 4 casas decimais após a vírgula, segundo a fórmula:

    √(x2 - x1)^2 + (y2 - y1)^2
*/

let [x1, y1] = lines.shift().split(" ");
let [x2, y2] = lines.shift().split(" ");

let p1 = Math.pow((x2 - x1), 2)
let p2 = Math.pow((y2 - y1), 2)

let d = Math.sqrt(p1 + p2);

console.log(`${d.toFixed(4)}`);






