console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadePassageiro = 17;
console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

if (idadePassageiro >= 18) {
    console.log(`Você comprou passagem para o ${listaDeDestinos[2]}`);
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}else {
    console.log(`Você é menor de idade, não pode comprar passagem.`);
}









