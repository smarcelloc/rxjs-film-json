
///////////////////// GERAR CADA 2 SEGUNDOS DADOS (STREAMING DE DADOS) ////////
const { interval } = require("rxjs")
// interval: tempo de resposta 

const obs = interval(1000) // PARAMETRO: MILISSEGUNDOS

const sub01 = obs.subscribe(numero => {
    console.log(numero)
}) // somente executar quando for gerado os dados

///////////////////// NO CONSOLE EM NODE ///////////////////////////////////////
//executar: node exemplo01.js
/*
0 -> 2s
1 -> 4s
2 ->6s
3 ->7s
4
5
6
7
*/

////////////////////////////////////////////////////////////////////////////////

setTimeout(() => {
    sub01.unsubscribe() // FINALIZAR A APLICAÇÃO
}, 6000) // 6 SEGUNDOS