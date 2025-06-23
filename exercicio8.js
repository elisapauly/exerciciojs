/*Exercício 8
Desenvolver programa para ler o nome, idade e peso de três pessoas. Calcular e imprimir 
idade e o peso médio das três pessoas.*/


prompt = require('prompt-sync')(); 

let nome1 = prompt("Digite seu nome: ");
let idade1 = Number(prompt("Digite sua idade: "));
let peso1 = parseFloat(prompt("Digite seu peso: "));
let media1 = (idade1 + peso1) /2;

console.log ("   ")
console.log ("- - - - - - - - - - - - - - ")
console.log ("   ")

let nome2 = prompt("Digite seu nome: ");
let idade2 = Number(prompt("Digite sua idade: "));
let peso2 = parseFloat(prompt("Digite seu peso: "));
let media2 = (idade2 + peso2) /2;

console.log ("   ")
console.log ("- - - - - - - - - - - - - - ")
console.log ("   ")

let nome3 = prompt("Digite seu nome: ");
let idade3 = Number(prompt("Digite sua idade: "));
let peso3 = parseFloat(prompt("Digite seu peso: "));
let media3 = (idade3 + peso3) /2;

console.log ("   ")
console.log ("- - - - - - - - - - - - - - ")
console.log ("   ")

console.log ("A média de idade e peso das três pessoas é: ", (media1 + media2 + media3));

console.log ("   ")
console.log ("- - - - - - - - - - - - - - ")