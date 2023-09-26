const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '/dev/stdin', 'utf8');
const quebraLinhaWindows = '\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

/* 1012 - calculo area */
let [A, B, C] = lines[0].split(" ");
let pi = 3.14159;

let areaTrinaguloRetangulo = (A * C) / 2;
let areaCirculo = pi * Math.pow(C, 2);
let areaTrapezio = ((Number(A) + Number(B)) * C) / 2;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTrinaguloRetangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);