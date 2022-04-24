console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// Atalho importante. Para selecionar várias linhas e comentá-las, selecione-a todas que deseja torna-la como comentário, e, em seguida, use o atalho ctrl + k + c. Será criado uma barra para comentar toda a seleção que você fez. Da mesma forma, utilize ctrl + k + u para removê-las.

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //Adicionando um item na lista após a declaração da mesma(lista).

console.log(`Destinos possíveis: `);
//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
//Ao passar os paramêtros para o splice, funciona da seguinte forma(1. Qual posição do elemento deseja remover, 2. Quantos elementos deseja remover a partir da posição do elemento que você informou/passou.)



console.log(listaDeDestinos[1]);


//Para estudar melhor sobre arrays: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array