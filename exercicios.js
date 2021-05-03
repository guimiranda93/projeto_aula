/**
 *
 * Exercícios de JavaScript
 * Tenha atenção aos comentários, se você descomentá-los o código poderá ter erros.
 * Faça os testes pra ver se as coisas estão sendo executadas corretamente.
 * Atente-se na organização do código.
 *
 */

/**
 *
 * Exemplo - Exiba a mensagem "Hello World" no console do navegador
 *
 */

console.log("Hello World");

/**
 *
 * 1 - Crie uma função para somar dois números e retornar o resultado, utilize variáveis. Não esqueça de chamar a função para ela funcionar.
 *
 */

/**
 *
 * 2 - Crie um array com os números ímpares de 1 a 11.
 *
 */

/**
 *
 * 3 - Crie um objeto que contenha informações pessoais - Exemplo: nome, telefone, idade, endereço, etc. (Utilize informações não verdadeiras)
 *
 */

/**
 *
 * 4 - Crie uma lista (array) com vários objetos de informações pessoais, como foi criado no exercício 3. Adicione pelo menos 5 pessoas.
 *
 */

/**
 *
 * 5 - Crie 3 variáveis, uma contendo uma string, outra contendo um valor numérico e outra contendo um valor boolean.
 *
 */

/**
 *
 * 6 - Crie uma condicional utilizando if else para comparar se um número é maior ou igual ao outro. Exiba uma mensagem afirmando se é maior ou não.
 *
 */

/**
 *
 * 7 - Crie uma condicional utilizando switch para exibir o nome do mês, passando como variável um valor numérico de 1 a 12.
 *
 */

/**
 *
 * 8 - Faça um loop, utilizando while, for ou map para percorrer o array de objetos abaixo e exiba o nome de cada pessoa.
 *
 *
 */

let cadastroPessoas = [
	{
		nome: "Benedito Levi da Cunha",
		idade: 31,
	},
	{
		nome: "César Luan Gael Monteiro",
		idade: 50,
	},
	{
		nome: "Fernando Thomas Emanuel Rocha",
		idade: 28,
	},
	{
		nome: "Felipe Kaique Alves",
		idade: 32,
	},
	{
		nome: "Benício Henrique Moraes",
		idade: 56,
	},
];

/**
 * 
 * 9 - Corrija o erro no trecho de código abaixo. Observe os comentários para entender o que deve ser feito
 * 
 */
let multiplosValores = {12, 45, 41, 62, 74, 88, 13, 25, 14};
CalcularVariosValores(multiplosValores);

function CalcularVariosValores(valores){

  let total = 0;

  valores.map((item) => {
    total = total - item;
  });

  // Deve exibir a soma de todos os valores do array
  console.loggg("O total é "+ item);
}

/**
 * 
 * 10 - Crie uma função para exibir a tabuada de 6. Veja o exemplo abaixo:
 * 
 * console.log("6x1 = 6");
 * 
 */