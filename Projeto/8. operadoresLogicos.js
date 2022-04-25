const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadePassageiro = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

if (idadePassageiro >= 18 || estaAcompanhada == true) {
    console.log(`Você comprou passagem para o ${listaDeDestinos[2]}`);
    listaDeDestinos.splice(2, 1);
    console.log(listaDeDestinos);
} else {
    if (estaAcompanhada == true) {
        console.log(`Comprador está acompanhado e comprou passagem para o ${listaDeDestinos[2]}`);
        listaDeDestinos.splice(2, 1);
        console.log(listaDeDestinos);
    } else {
        console.log(`Você é menor de idade, não pode comprar passagem.`);
    }
}

// - \n pula linha
console.log("Embarque: \n");
if (idadePassageiro >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!");
}else {
    console.log("Você não pode embarcar");
}