/*Exercício Extra 2

Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por 
extenso. Dica: use a função “split” (pesquise seu funcionamento) de uma string que quebra a 
string em pedaços dado um separador como argumento da função. Nesse caso, o separador é a 
barra (/) da data.
Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”*/

prompt = require('prompt-sync')();

function dataPorExtenso(data) {
  
const partes = data.split("/");
const dia = partes[0];
const mes = partes[1];
const ano = partes[2];
const nomesDosMeses = [
  
"janeiro", "fevereiro", "março", "abril", "maio", "junho",
"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];
  
const nomeDoMes = nomesDosMeses[parseInt(mes) - 1];
const dataExtenso = `${dia} de ${nomeDoMes} de ${ano}`;

console.log("Data por extenso:", dataExtenso);
}

const entrada = prompt("Digite uma data no formato dd/mm/aaaa:");
dataPorExtenso(entrada);