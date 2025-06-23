/*Exercício 9
Uma autolocadora aluga seus carros com uma taxa fixa por dia, uma taxa por Km rodado e 
desconto de 10% na taxa fixa de aluguel por dia. Escrever um algoritmo que lê a taxa fixa 
por dia, a taxa por Km rodado, o número de dias, o número de quilômetro rodado e 
calcular e escrever o valor total do aluguel, o valor do desconto, o numero de dias, e a 
quilometragem rodada.*/

console.log ("╔                                       ╗")
console.log ("                    ⛟                   ")
console.log ("               AUTOLOCADORA              ")
console.log ("╚                                       ╝")
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")
console.log ("╔                                       ╗")
console.log ("             TAXA FIXA POR DIA           ")
console.log ("             TAXA POR KM RODADO          ")
console.log ("   DESCONTO DE 10% NA TAXA FIXA POR DIA  ")
console.log ("╚                                       ╝")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")


prompt = require('prompt-sync')(); 

let taxaFixaPorDia = parseFloat(prompt("Digite a taxa fixa por dia: "));
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let taxaKmRodado = parseFloat(prompt("Digite a taxa de km rodado: "));
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let numeroDeDias = parseFloat(prompt("Digite o número de dias: "));
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let KmRodado = parseFloat(prompt("Digite o número de km rodado: "));
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

console.log("O valor total do aluguel é:  R$", (taxaFixaPorDia * numeroDeDias + taxaKmRodado * KmRodado - (taxaFixaPorDia * numeroDeDias * 0.10.toFixed(2))));
console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")