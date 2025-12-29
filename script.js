function gerarNumeros(quantidadeNumeros, quantidadeJogos) {
    const meuJogo = []

    while (meuJogo.length < quantidadeJogos) {
        const numeros = []
        while (numeros.length < quantidadeNumeros) {
            numeros.push(Math.floor(Math.random() * 60))
        }
        meuJogo.push(numeros)
    }
    console.log(meuJogo)
}

gerarNumeros(6, 5)