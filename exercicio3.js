/*Exercício 3
Crie um programa que leia o número de horas trabalhadas no mês e o valor da hora. O 
programa deverá imprimir o salário que o funcionário deverá receber, calculando o 
desconto de 6% do vale transporte do funcionário.*/


prompt = require('prompt-sync')(); 

let horasTrabalhadas = Number(prompt("Digite as horas trabalhadas: "));
let valorHora = Number(prompt("Digite o valor das horas trabalhadas: "));
let valeTransporte = Number(prompt("Digite o valor do vale transporte: "));
let descontoValeTransporte = 0.06;

console.log("O valor do salário é: ", (horasTrabalhadas * valorHora - (horasTrabalhadas * valorHora * descontoValeTransporte)));
