/**
 * arquivo: voidType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre o tipo 'void'
 * data: 27/08/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#void
 * 
 * O Tipo Void garante que o tipo de retorno de uma função ou metodo seja 'undefined' ou 'null' ou seja nao retorne nenhum dado.
 * 
 * O tipo void é usado principalmente como o tipo de retorno de funções que não retornam um valor.
 * * O tipo void é útil quando você deseja indicar que uma função não retorna um valor significativo ou quando você deseja evitar que uma função retorne um valor acidentalmente.
 * 
 * 
 * Em alguns casos se quer precisamos setar o retorno da funcao como Void, pois o TS ja infere isso automaticamente muitas vezes.
 */

// ==> Exemplo 01 - funções:

function logError(errorMessage: string): void {
  console.log(errorMessage);
  // return errorMessage;
}

logError('Required field - Name!');

// ==> Exemplo 02 - funções:

const logErrorExample2 = (errorMessage: string): void => {
  console.log(errorMessage);
};

logErrorExample2('Required field - Surname');

// ==> Exemplo void: variáveis

let variavelExemploVoid: void;
// variavelExemploVoid = 1;
variavelExemploVoid = null; // Pode ser null ou undefined ja que mudamos o strictNullChecks no tsConfig
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
