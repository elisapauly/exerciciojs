/*Exercício 1
Crie um programa que leia 3 números e faça a média entre eles. Após o cálculo, imprima o 
valor na tela.*/

prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let numero3 = Number(prompt("Digite o terceiro número: "));

let soma = (numero1 + numero2 + numero3);
let media = soma /3;
console.log(`A média é: ${media}`);