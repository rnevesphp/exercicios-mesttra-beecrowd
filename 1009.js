const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1009 - calculo de salario */

let nomeFuncionario = String(lines.shift());
let salarioMensal = parseFloat(lines.shift());
let totalDeVendasRealizadas = parseFloat(lines.shift());
let comissao = 0.15;
let calculoComissaoVendas = totalDeVendasRealizadas * comissao;
let salarioComComissao = salarioMensal + calculoComissaoVendas;
console.log(`TOTAL = R$ ${salarioComComissao.toFixed(2)}`);


