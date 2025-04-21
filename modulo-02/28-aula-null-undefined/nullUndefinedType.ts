/* eslint-disable prefer-const */
/**
 * arquivo: nullUndefinedType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre os tipos 'null' e 'undefined'
 * data: 14/09/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html
 * 
 * O tipo NULL representa a ausência intencional de qualquer valor ou objeto. É um valor atribuído a uma variável que não tem valor definido.
 * O tipo NULL é frequentemente usado para indicar que uma variável não tem valor ou que um objeto não foi inicializado.
 * 
 * O tipo UNDEFINED representa uma variável que foi declarada, mas não inicializada. É o valor padrão atribuído a variáveis que não foram atribuídas a um valor.
 * O tipo UNDEFINED é frequentemente usado para indicar que uma variável não tem valor ou que um objeto não foi inicializado.
 * 
 * Diferencas entre NULL e UNDEFINED:
 * 
 * - NULL é um valor atribuído a uma variável que não tem valor definido, enquanto UNDEFINED é o valor padrão atribuído a variáveis que não foram atribuídas a um valor.
 * - NULL é um valor intencional, enquanto UNDEFINED é um valor acidental.
 * - NULL é frequentemente usado para indicar que uma variável não tem valor ou que um objeto não foi inicializado, enquanto UNDEFINED é frequentemente usado para indicar que uma variável não tem valor ou que um objeto não foi inicializado.
 */

// ==> Exemplo 01: Null

let variavelTesteNull = null;

console.log(variavelTesteNull);
console.log(typeof variavelTesteNull);

// ==> Exemplo 02: Undefined

let variavelTesteUndefined;

console.log(variavelTesteUndefined);
console.log(typeof variavelTesteUndefined);

// ==> Diferenças e Similaridades: Null vs Undefined

console.log('Exemplo 01:', null == undefined);
console.log('Exemplo 02:', null === undefined);
