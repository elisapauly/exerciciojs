/*Exercício 4
Escreva um programa para ler o salário mensal atual de um funcionário e o percentual de 
reajuste. Calcular e escrever o valor do novo salário.*/


prompt = require('prompt-sync')(); 

let salario = parseFloat(prompt("Digite seu salário atual: "));
let reajuste = parseFloat(prompt("Digite o valor do reajuste: "));

console.log("O valor do novo salário com reajuste é: ", (salario + (salario * reajuste)));

