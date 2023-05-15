var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaEsquerda")
var setaDireita = window.document.getElementById("setaDireita")

function rolarDireita() {
    Leonardo.style = "display: none"
    Samantha.style = "display: flex"
    
    setaEsquerda.style = "margin-top: 25%"
    setaDireita.style = "margin-top: 25%"
    
    setaDireita.style = "display: none"
    setaEsquerda.style = "display: flex"
}

function rolarEsqerda(){
    Samantha.style = "display: none"
    Leonardo.style = "display: flex"
    /*Bruna.style = "display: nome"*/
    
    setaEsquerda.style = "margin-top: 25%"
    setaDireita.style = "margin-top: 25%"
    
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}
