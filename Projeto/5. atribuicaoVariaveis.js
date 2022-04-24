console.log("Trabalhando com Atribuição de Variáveis");

const primeiroNome = "Renan";
const sobrenome = "Lemos";

let contador = 0;
contador = contador + 1;
 
//Faça dessa forma
console.log(primeiroNome + " " + sobrenome);

//Ou
console.log(primeiroNome, sobrenome);
//Ou faça a interpolação

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome;
console.log(primeiroNome);

let idade = 22;
idade = idade + 1;
console.log(idade);


// Quando atribuímos uma variável como "const", significa que ela é constante, ou seja, ela não pode mudar pois já foi atribuída a um valor, e com isso não será possível sobrescrevê-la. Uma vez que a variável é declarada, ela não muda. 

// Caso queira sobrescrever uma variavel, declare ela como let (ex: let = nome).