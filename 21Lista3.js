
let salarios = [1000, 1200, 1500, 2000, 2200, 4000]
let filhos = [0, 1, 3, 2, 0, 4]

function CalcularMediaSalario() {
    let media = 0
    salarios.forEach(x => media = x + media)
    media = media / salarios.length
    return media
}

function CalcularMediaFilhos() {
    let mediaF = 0
    filhos.forEach(x => mediaF = x + mediaF)
    mediaF = mediaF / filhos.length
    return mediaF
}

function CalcularMaiorSalario() {
    let maiorSalario = 0
    salarios.forEach(x =>{
        if (x > maiorSalario) {
            maiorSalario = x
        }
    })
    return maiorSalario
}

function CalcularPorcentagem() {
    let porcentagem = 0
    let salariosAte1500 = 0
    salarios.forEach(x => {
        if (x <= 1500) {
            salariosAte1500++        
        }
    })
    porcentagem = salariosAte1500 / salarios.length
    return porcentagem * 100
}

console.log("A media de salarios é: " + CalcularMediaSalario())
console.log("A media de filhos é: " + CalcularMediaFilhos())
console.log("O maior salario é: " + CalcularMaiorSalario())
console.log("A porcentagem de salarios maiores de 1500 é: " + CalcularPorcentagem() + " %")