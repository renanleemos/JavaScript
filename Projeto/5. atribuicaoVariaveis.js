console.log("Trabalhando com Atribuição de Variáveis");

const idade = 22;
const primeiroNome = "Renan";
const sobrenome = "Lemos";
 
//Faça dessa forma
console.log(primeiroNome + " " + sobrenome);
//Ou
console.log(primeiroNome, sobrenome);
//Ou faça a interpolação
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(nome);

// Quando atribuímos uma variável como "const", significa que ela é constante, ou seja, ela não pode mudar pois já foi atribuída a um valor, e com isso não será possível sobrescrevê-la. Uma vez que a variável é declarada, ela não muda. 
// Caso queira sobrescrever uma variavel, declare ela como let (ex: let = nome).