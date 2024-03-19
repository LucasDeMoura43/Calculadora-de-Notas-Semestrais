function Calcular() {

    let nota1 = parseFloat(document.getElementById('g1').value)
    let nota2 = parseFloat(document.getElementById('g2').value)
    let media = (nota1 + nota2) / 2


    if (nota1 > 10 || nota2 > 10 || isNaN(nota1) || isNaN(nota2)) {
        alert('por favor insira Números válidos')
    } else if (media >= 6) {

        document.getElementById('res').innerHTML = `sua nota é ${media} parabéns por ser aprovado`
        document.getElementById('res').style.background = "#ffff"
    }
    else {
        document.getElementById('res').innerHTML = `sua nota é ${media} você reprovou, foco nos estudos`
    }
}