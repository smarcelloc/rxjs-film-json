const { Observable } = require('rxjs')

const obs = Observable.create(subscriber => {
    subscriber.next('TEXTO 01')
    subscriber.next('TEXTO 02')
    subscriber.next('TEXTO 03')

    // setTimeout(() => {
    //     subscriber.next('TEXTO 04 3 seg')
    //     subscriber.complete()
    // }, 3000)
    //Math.random() somente retorna 0 até 1
    let random = Math.random().toFixed(2)
    console.log(random);
    if (random >= 0.5) {
        subscriber.next('TEXTO SUCESSO 05')
        subscriber.complete()
    } else {
        throw "Erro: na aplicação"
    }
})


obs.subscribe(
    texto => console.log(texto), // DADOS GERADOS 
    err => console.log(err), // ERRO 
    () => console.log('Fim!') // QUANDO EXECUTA A FUNÇÃO subscriber.complete()
)