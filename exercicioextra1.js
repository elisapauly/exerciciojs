/*Exsercício Extra 1
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores 
e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa 
que recebe o salário de um colaborador e calcule reajuste segundo o seguinte critério, baseado 
no salário atual:
● Salários até R$ 280,00 (incluindo): aumento de 20%
● Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
● Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
● Salários de R$ 1500,00 em diante: aumento de 5%
● Mostre os valores digitados e os valores ajustados.*/

prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Digite seu salário atual:"));
let aumento = 0;
let percentual = 0;

if (salario <=280){
  percentual = 20
}
else if (salario > 280 && salario <= 700){
  percentual = 15;
}
else if (salario > 700 && salario <= 1500){
  percentual = 10;
}
else {
  percentual = 5;
}

aumento = (salario * percentual) / 100;
let novoSalario = salario + aumento;

console.log("Salário antigo: R$", salario.toFixed(2));
console.log("Percentual de aumento: ", percentual, "%");
console.log("Valor do aumento: R$", aumento.toFixed(2));
console.log("Novo salário: R$", novoSalario.toFixed(2));