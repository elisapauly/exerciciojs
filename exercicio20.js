/*Exercício 20
Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado 
daquele tamanho com asteriscos e espaços em branco. Seu programa deve funcionar 
para quadrados com lados de todos os tamanhos entre 1 e 20.
Para lado igual a 5:
*****
* *
* *
* *
****
*/

function desenharQuadrado(lado) {
if (lado < 1 || lado > 20) {
 console.log("O lado deve estar entre 1 e 20.");
 return;
  }

for (let i = 0; i < lado; i++) {
let linha = "";

for (let j = 0; j < lado; j++) {
if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
linha += "*";
} else {
linha += " ";
}
 }

console.log(linha);
}
 }

let tamanho = 5;
desenharQuadrado(tamanho);