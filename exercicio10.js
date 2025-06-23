/*Exercício 10
Escrever um programa que lê a taxa de consumo de potência elétrica de um refrigerador, o 
tempo em horas que permaneceu ligado e o valor do quilowatt hora e calcular e escrever a 
energia total gasta pelo refrigerador, bem como, o valor a ser pago à companhia de Energia 
Elétrica.*/



prompt = require('prompt-sync')(); 

console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")


let taxadeConsumodePotencia = parseFloat(prompt("Digite a taxa de consumo de potência elétrica do seu refrigerador: "));

console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let tempo = parseFloat(prompt("Digite o tempo em horas que o refrigerador ficou ligado: "));

console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let valordoQuilowatthora = parseFloat(prompt("Digite o valor do quilowatt - hora: "));

console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")

let energiaTotalGasta =(taxadeConsumodePotencia * tempo * valordoQuilowatthora);
let ValoraPagar = (energiaTotalGasta * 30);

console.log("O valor a pagar é: R$", ValoraPagar.toFixed(2));

console.log ("                                         ")
console.log ("▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀")