const { Observable } = require('rxjs')
const axios = require('axios')
const { map } = require('rxjs/operators')

function httpGet(url) {
    return Observable.create(subscriber => {
        axios.get(url)
            //.then(resposta => subscriber.next(resposta.data))
            .then(resposta => {
                let dados = resposta.data
                // REMOVER O ARRAY
                if (Array.isArray(dados)) {
                    dados.forEach(element => {
                        subscriber.next(element)
                    })
                } else {
                    subscriber.next(dados)
                }
            })
            .then(() => subscriber.complete())
    })
}

httpGet('http://localhost:3001/films')
    .pipe(
        map(element => element.Actors),
        //map(elementActors => String(elementActors).split(','))
        map(elementActors => String(elementActors).split(/\s*,\s*/g)),
        map(elementActors => elementActors.length)
    )
    .subscribe(dado => console.log(dado))