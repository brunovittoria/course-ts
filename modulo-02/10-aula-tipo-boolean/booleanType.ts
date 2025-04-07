/**
 * arquivo: booleanType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * data: 17/02/2021
 * author: Glaucia Lemos <@glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 * 
 * ⁠Iremos usar o tipo boolean Primitivo, que é um dos tipos primitivos do TypeScript.
 * O tipo boolean é um tipo de dado que pode ter apenas dois valores: true ou false.
 * 
 * Ja o tipo Boolean é um tipo de dado que é um objeto wrapper para o tipo primitivo boolean.
 * O tipo Boolean é usado para criar objetos que podem armazenar valores booleanos, mas não é tão comum quanto o tipo primitivo boolean.
 */

// ==> Exemplo 01

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

// ==> Exemplo 02

let concluido: boolean = false;

if (!concluido) {
    console.log('Tarefa foi concluída com sucesso!')
} else {
    console.log('Tarefa Pendente!');
}
