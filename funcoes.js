var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaEsquerda")
var setaDireita = window.document.getElementById("setaDireita")

function rolarDireita() {
    Leonardo.style = "display: none"
    Samantha.style = "display: flex"
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex"
}

function rolarEsqerda(){
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
    Samantha.style = "display: none"
    Leonardo.style = "display: flex"
    Bruna.style = "display: nome"
}