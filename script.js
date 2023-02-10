function biloto() {
    let inicio = document.querySelector("input#inicio")
    let passo = document.querySelector("input#passo")
    let fim = document.querySelector("input#fim")
    let res = document.querySelector("p#res")
    let contador = Number((inicio).value)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || inicio.value == fim.value) {
        res.innerHTML = `[ERRO] Impossível contar`
        return
    }
    else if (fim.value > inicio.value) {
        res.innerHTML = `Contando: `
        do {
            res.innerHTML += `${contador} \u{1F449}&nbsp;`
            contador += Number((passo).value)
        } while (contador <= Number((fim).value))
        res.innerHTML += `\u{1F3C1}`
    } else {
        res.innerHTML = `Contando: `
        do {
            res.innerHTML += `${contador} \u{1F449}&nbsp;`
            contador -= Number((passo).value)
        } while (contador >= Number((fim).value))
        res.innerHTML += `\u{1F3C1}`
    }
}
