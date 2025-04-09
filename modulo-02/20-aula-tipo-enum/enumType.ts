/**
 * arquivo: enumType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 20/06/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 * 
 * Os Enums são uma maneira de dar nomes mais amigáveis a conjuntos de números ou strings.
 * Eles são úteis quando você tem um conjunto fixo de valores que não mudam, como dias da semana, meses do ano, etc.
 * 
 * Os Enums podem ser numéricos ou de string. Os Enums numéricos são os mais comuns e são atribuídos automaticamente a números inteiros, começando em 0.
 * Você também pode atribuir valores específicos a eles, se desejar.
 * 
 * Porque usar Enums?
 * - Eles tornam o código mais legível e fácil de entender.
 * - Eles ajudam a evitar erros de digitação, pois você pode usar os nomes dos Enums em vez de números ou strings.
 * - Eles permitem que você agrupe valores relacionados em um único tipo.
 * - Eles podem ser usados para criar constantes que podem ser reutilizadas em todo o código.
 * 
 * Quando usar Enums?
 * - Quando você tem um conjunto fixo de valores que não mudam.
 * - Quando você deseja tornar o código mais legível e fácil de entender.
 * - Quando você deseja evitar erros de digitação.
 * - Quando você deseja agrupar valores relacionados em um único tipo.
 * - Quando você deseja criar constantes que podem ser reutilizadas em todo o código.
 * 
 * Cuidados ao usar Enums:
 */

// ==> Exemplo 01: Numeric Enums (Enums Numérico)

enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

// ==> Exemplo 02: String Enums

enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}

console.log(Dia);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

/*const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(5));*/

const enum Comida {
  Hamburger = 'Hamburger',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));

// ==> Exemplo 04: Quando usar enum?!
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa Concluída!');
}


// ==> Exemplo 05: Uso comum de Enums

enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}

interface Order {
  id: number;
  status: OrderStatus;
  customerName: string;
}

function processOrder(order: Order) {
  switch (order.status) {
    case OrderStatus.PENDING:
      return `Pedido #${order.id} está aguardando processamento`;
    case OrderStatus.PROCESSING:
      return `Pedido #${order.id} está sendo preparado`;
    case OrderStatus.SHIPPED:
      return `Pedido #${order.id} está a caminho`;
    case OrderStatus.DELIVERED:
      return `Pedido #${order.id} foi entregue`;
    case OrderStatus.CANCELLED:
      return `Pedido #${order.id} foi cancelado`;
  }
}