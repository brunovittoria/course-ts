/**
 * arquivo: neverType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'never'
 * data: 11/11/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
 * 
 * O tipo never é um tipo especial no TypeScript que representa valores que nunca ocorrem.
 * Isso significa que uma função que retorna never nunca deve retornar um valor ou deve lançar uma exceção.
 * 
 * E usado principalmente em funções que lançam exceções ou que nunca retornam um valor.
 * 
 * Em projetos reais, o tipo never é útil para indicar que uma função não deve retornar um valor ou que um bloco de código nunca deve ser alcançado.
 * 
 * exemplo: uma função que lança uma exceção ou uma função que entra em um loop infinito.
 *
 */

// ==> Exemplo 01: Never - Throw Exception

function error(message: string): never {
  throw new Error(message);
}

console.log(error('Erro de Mensagem - 01'));

// ==> Exemplo 02: Never inferido automaticamente
function rejectMessage() {
  return error('Error de Mensagem - 02');
}

console.log(rejectMessage());

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log('Oi, Developers!');
  }
};

// console.log(loopInfinito());

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const algumaCoisaVoid: void = null;

// ==> dará erro! (// Error: Type 'null' is not assignable to type 'never')
// const algumaCoisaNever: never = null;

//console.log(algumaCoisaVoid);
//console.log(algumaCoisaNever);
