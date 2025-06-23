/*Exercício 12
Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as 
informações.*/

prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");

if (nome === senha){
  console.log("Nome de usuário e senha não podem ser iguais");
  console.log("Tente novamente com a senha diferente do nome de usuário");
}
else {
  console.log("Acesso permitido");
}