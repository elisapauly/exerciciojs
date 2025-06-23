/*Exercício 11
Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o 
valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/

prompt = require('prompt-sync')();

let nota = Number(prompt("Digite uma nota de 0 a 10: "));

if (nota >= 0 && nota <= 10){
  console.log("Nota válida");
}
else {
console.log("Nota inválida");
}