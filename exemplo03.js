const { from } = require('rxjs')

const { map } = require('rxjs/operators')

const maximoDeNota = 10
const notas = []

for (let i = 0; i < maximoDeNota; i++) {
    notas[i] = (Math.random() * 10).toFixed(1)
}


from(notas)
    .pipe(
        //map(element => element >= 6 ? 'Aprovado' : 'Reprovado') cria o novo array (como fosse alterar)
        map(element => element >= 6 ? 'Aprovada' : 'Reprovado'),
        map(element => element[0])
    )
    .subscribe(notas => {
        console.log(notas)
    })

console.log('FIM')