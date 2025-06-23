/*Exercício 5
O coração humano bate em média uma vez por segundo. Desenvolver um programa para 
calcular e escrever quantas vezes o coração de uma pessoa baterá se viver X anos.*/


prompt = require('prompt-sync')(); 

let anos = Number(prompt("Digite a idade: "));
let segundosPorAno = 365 * 24 * 60 * 60 
let batimentos = anos*segundosPorAno; 

console.log("Com a idade ", anos, " anos, seu coração baterá ", batimentos, " vezes.");