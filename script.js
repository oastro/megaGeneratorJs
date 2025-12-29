function gerarNumeros(quantidadeNumeros, quantidadeJogos) {
    const meuJogo = []

    while (meuJogo.length < quantidadeJogos) {
        const numeros = new Set()
        let conjuntoNumeros

        while (numeros.size < quantidadeNumeros) {
            numeros.add(Math.floor(Math.random() * 60 + 1))
            conjuntoNumeros = Array.from(numeros)
        }
        meuJogo.push(conjuntoNumeros.sort((a, b) => a - b))
    }
    console.log(meuJogo)
}

gerarNumeros(6, 5)