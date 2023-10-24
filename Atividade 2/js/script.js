let carro = document.getElementById('carro');
let gaso  = document.getElementById('gaso');
gaso = parseFloat();


function formataMoeda(valor) {
    return valor.toFixed(2).replace(".", ",")
}

function parouNoEstacionamento() {
    valorEstacionamento = 0
    var checkBox = document.getElementById("sim")
    if (checkBox.checked == true) {
        valorEstacionamento = 15
        // supondo que o custo do período é de R$ 15
    }
    return valorEstacionamento
}

function calcular() {
    valorTotal = 0
    distancia = inputDistancia.value.replace(",", ".")
    gaso = precoGaso.value
    consumoDoCarro = 10
    consumoDaMoto = 20

    valorCombustivel = gaso;

    if (carro.checked) {
        litrosCombustivel = distancia / consumoDoCarro

        gastoCombustivel = (litrosCombustivel * valorCombustivel)

        valorTotal = gastoCombustivel + parouNoEstacionamento()

        botaoCalcular.innerHTML = `Total: R$${formataMoeda(valorTotal)}`

    } else {

        litrosCombustivel = distancia / consumoDaMoto

        gastoCombustivel = (litrosCombustivel * valorCombustivel)

        valorTotal = gastoCombustivel + parouNoEstacionamento()

        botaoCalcular.innerHTML = `Total: R$${formataMoeda(valorTotal)}`
    }
}
