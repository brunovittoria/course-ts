/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 * 
 * Devemos evitar ao maximo evitar o tipo ANY pois ele desabilita a verificação de tipos do TypeScript.
 * 
 * O tipo 'any' é o tipo mais genérico do TypeScript. Ele pode ser usado para representar qualquer valor,
 * e não tem verificação de tipo em tempo de compilação. Isso significa que você pode atribuir qualquer valor a uma variável do tipo 'any'.
 * 
 * O tipo 'any' é útil quando você não sabe o tipo de um valor em tempo de compilação, ou quando você está lidando com bibliotecas de terceiros que não têm tipos definidos.
 */

// ==> Exemplo 01: Tipo Any
const a: any = 34;
const b: any = ['Glaucia'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
};

console.log(formulario);
