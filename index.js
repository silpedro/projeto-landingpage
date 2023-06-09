var Leonardo = window.document.getElementById('leonardo')
var Samantha = window.document.getElementById('samantha')
var Bruna = window.document.getElementById('bruna')
var SetaEsquerda = window.document.getElementById('seta-esquerda')
var SetaDireita = window.document.getElementById('seta-direita')

function RolarDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:55%"
    SetaDireita.style = "display:none"
}

function RolarEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}