/*Exercício 18
A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um 
programa capaz de gerar a série até o n−ésimo termo que deverá ser pedido pelo usuário.*/


prompt = require('prompt-sync')();

let n = parseInt(prompt("Quantos termos da série de Fibonacci você quer ver?"));

let a = 1;
let b = 1;

console.log("Série de Fibonacci:");

if (n >= 1) console.log(a);
if (n >= 2) console.log(b);

for (let i = 3; i <= n; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}