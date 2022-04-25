const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadePassageiro = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`\n Destinos possíveis: `);
console.log(listaDeDestinos);

const podeComprar = idadePassageiro >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe! Tivemos um erro.");
}

for (let contador = 0; contador < 3; contador++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        
    }
    contador++;
}