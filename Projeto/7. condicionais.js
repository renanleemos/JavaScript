console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadePassageiro = 18;
const estaAcompanhada = true;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

if (idadePassageiro >= 18) {
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

// Alt + Shift + F realiza a indentação do seu código.









