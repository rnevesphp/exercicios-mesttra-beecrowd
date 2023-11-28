const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

// let lateralTerreno = parseFloat(lines.shift());
// let frenteTerreno = parseFloat(lines.shift());
// let valorm2 = parseFloat(lines.shift());

// let areaDoTerreno = lateralTerreno * frenteTerreno;
// let valorDoTerreno = areaDoTerreno * valorm2;

// console.log(`Lateral do Terreno: ${lateralTerreno}\nFrente do Terreno: ${frenteTerreno}\n Area total do Terreno: ${areaDoTerreno}\n valor do terreno é de ${valorDoTerreno}`)