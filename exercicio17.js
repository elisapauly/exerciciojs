/*Exercício 17
Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
números pares e a quantidade de números ímpares.*/

prompt = require('prompt-sync')();

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
