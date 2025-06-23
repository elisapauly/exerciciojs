/*Exercício 2
Crie um programa que leia o valor do dólar e faça a conversão em reais. O usuário deverá 
inserir o valor da cotação atual do dólar (em reais) e o valor do produto (em dólar). O 
programa deverá imprimir o valor em reais.*/

prompt = require('prompt-sync')(); 

let dolar = parseFloat(prompt("Digite o valor em dólar: "));
let cotacao = parseFloat(prompt("Digite a cotação do dólar em reais: "));

console.log("O valor em reais é: ", (dolar * cotacao).toFixed(2));