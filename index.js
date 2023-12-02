let nivelHeroi = ("Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal");
let saldoPartidas = calcularsaldoRankeadas;

function calcularsaldoRankeadas (vitorias, derrotas) {
    let saldoPartidas = vitorias - derrotas;
    return saldoPartidas;

}

let calcularsaldoRankeadas (103,18);

if (nivelHeroi); 

if (saldoPartidas <= 10) {

    nivelHeroi = "Ferro";

} else if (saldoPartidas > 11 & saldoPartidas <= 20) {

    nivelHeroi = "Bronze";

} else if (saldoPartidas > 21 & saldoPartidas <=50) {

    nivelHeroi = "Prata";

} else if (saldoPartidas > 51 & saldoPartidas <=80) {

    nivelHeroi = "Ouro";

} else if (saldoPartidas > 81 & saldoPartidas <=90) {

    nivelHeroi = "Diamante";

} else if (saldoPartidas > 91 & saldoPartidas <= 100) {

    nivelHeroi = "Lendário";

} else if (saldoPartidas >= 101) {

    nivelHeroi = "Imortal"

}

console.log("O Herói tem saldo de 85 vitórias e está no nível de Diamante")