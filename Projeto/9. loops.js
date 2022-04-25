const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadePassageiro = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

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