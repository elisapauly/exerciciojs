/*Exercício 7
Faça um programa para executar as seguintes conversões:
– Ler uma temperatura em Fahrenheit e imprimir o equivalente em Celsius C=(5F-160)/9.
– Ler uma quantidade de chuva dada em polegadas e imprimir o equivalente em 
milímetros (1 polegada = 25,4 mm).
Declare uma constante para valor de 1 polegada em mm (milimetro_pol 25.4)*/

prompt = require('prompt-sync')(); 

let temperaturaFahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
let quantidadeDeChuvaemPolegadas = parseFloat(prompt("Digite a quantidade de chuva em polegadas: "));

const celsius = (5 * temperaturaFahrenheit - 160) /9;
const milimetros = quantidadeDeChuvaemPolegadas * 25.4;

console.log ("A temperatura em Celsius é:  C" + celsius.toFixed(2));
console.log ("A quantidade de chuva em milimetros é:  mm" + milimetros.toFixed(2));
