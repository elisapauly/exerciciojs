/*Exercício 15 
Faça um programa que receba dois números inteiros e gere os números inteiros que estão 
no intervalo compreendido por eles. Mostrar no final a soma dos números.*/

let contador = 1;
let soma = 0;

while(contador <= 500){
  soma = soma + contador;
  contador = contador + 1;
}

console.log ("A soma de 1 a 500 é: ", soma);