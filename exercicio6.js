/*Exercício 6
Um fabricante de latas deseja desenvolver um programa para calcular o custo de uma lata 
cilíndrica de alumínio, sabendo-se que o custo do alumínio por m² é R$ 100,00. Leia o raio 
e a altura e escreva o valor do custo. Declare uma constante para o valor de PI e outra para 
o valor do metro quadrado.*/


prompt = require('prompt-sync')(); 

let raio = parseFloat(prompt("Digite o valor do raio: "));
let altura = parseFloat(prompt("Digite o valor da altura: "));

const Custo_Aluminio_Por_Metro_Quadrado = 100;
const PI = 3.14159;

let area = 2 * PI * raio * altura + 2 * PI * raio * raio;
let custo = area * Custo_Aluminio_Por_Metro_Quadrado;

console.log ("O valor da lata é: R$" + custo.toFixed(2));
