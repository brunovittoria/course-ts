/**
 * arquivo: unknownType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Uknown'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
 * 
 * A principal diferença entre o tipo unknown e o tipo any é que o tipo unknown é mais seguro.
 * 
 * O tipo any permite que você atribua qualquer valor a ele e o use sem verificação de tipo, enquanto o tipo unknown exige que você faça uma verificação de tipo antes de usá-lo.Isso significa que, se você usar o tipo unknown, você terá que fazer verificações de tipo antes de usar o valor, o que pode ajudar a evitar erros em tempo de execução.
 * 
 * O tipo unknown é útil quando você não sabe o tipo de um valor, mas ainda deseja garantir que ele seja tratado de forma segura.
 * O tipo any é útil quando você precisa de flexibilidade total e não se importa com a segurança de tipo.
 * 
 * Ao atribuir um valor do tipo unkown pra uma variavel vc nao pode redeclarar a variavel denovo e mudar o tipo dela, Exemplo disso no exemplo 2 logo abaixo
 */

// ==> Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

// console.log(valorVariavel);

// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

/*let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}
