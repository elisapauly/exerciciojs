/*Exercício 19
Achar o maior, menor, média e organizar números ou sequências são os algoritmos mais 
importantes e estudados em Computação. Em C não poderia ser diferente.
Em nosso curso, obviamente, também não será diferente.
Escreva um programa em C que solicita 10 números ao usuário, através de um laço while, 
e ao final mostre qual destes números é o maior*/

#include <stdio.h>

int main() {
int contador = 0;
int numero, maior;

printf("Digite 10 números:\n");

while (contador < 10) {
printf("Número %d: ", contador + 1);
scanf("%d", &numero);

if (contador == 0) {
maior = numero;
} else if (numero > maior) {
maior = numero;
}

contador++;
}

printf("O maior número digitado foi: %d\n", maior);

return 0;
}