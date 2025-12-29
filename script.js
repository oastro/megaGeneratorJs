function gerarNumeros(quantidadeJogos) {
    const meuJogo = []
    for (let index = 0; index < quantidadeJogos; index++) {
        const numeros = []
        for (let index = 0; index < 6; index++) {
            numeros.push(Math.floor(Math.random() * 60))
        }
        meuJogo.push(numeros)
    }
    console.log(meuJogo)
}

gerarNumeros(5)