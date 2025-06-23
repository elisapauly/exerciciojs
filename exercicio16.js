/*Exercício 16
Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro 
entre 1 a 10. O usuário deve informar de qual número ele deseja ver a tabuada. A saída 
deve ser conforme o exemplo abaixo: 
Tabuada de 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
*/

prompt = require('prompt-sync')();

function gerarTabuada() {
 
  let num = parseInt(prompt("Digite um número inteiro entre 1 e 10 para ver a tabuada:"));

  if (num >= 1 && num <= 10) {
    console.log(`Tabuada de ${num}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log("Número inválido! Por favor, digite um número entre 1 e 10.");
  }
}
/
gerarTabuada();