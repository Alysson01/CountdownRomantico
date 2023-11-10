import Countdown from "./countdown.js";

const TempoParaFacul = new Countdown("10 november 2023 18:00:00 GMT-0300")

const tempos = document.querySelectorAll('[data-time');

var meuAudio = document.getElementById('meuAudio');
meuAudio.volume = 0.2; // Ajuste o valor conforme necessário (de 0.0 a 1.0)


document.getElementById("botaoCopiar").addEventListener("click", function() {
    var textoEspecifico = "01001110 01100001 00100000 01110000 01100001 01110010 01110100 01100101 00100000 01100100 01100001 00100000 01100011 01101001 01100100 01100001 01100100 01100101 00100000 01101111 01101110 01100100 01100101 00100000 01101111 00100000 01110011 01101111 01101100 00100000 01110011 01100101 00100000 01110000 11110101 01100101 00100000 01100101 00100000 01101111 00100000 01010010 01101001 01101111 00100000 01100001 01100010 01110010 01100001 11100111 01100001 00101100 00100000 01010101 01101101 01100001 00100000 01101110 01101111 01101001 01110100 01100101 00100000 01100101 01110011 01110000 01100101 01100011 01101001 01100001 01101100 00100000 01100101 01101101 00100000 01110101 01101101 00100000 01101100 01110101 01100111 01100001 01110010 00100000 01100011 01100001 01110000 01100001 01111010 00100000 01100100 01100101 00100000 01100011 01110101 01110010 01100001 01110010 00100000 01101110 01101111 01110011 01110011 01100001 00100000 01100100 01100101 01110000 01110010 01100101 01110011 01110011 11100011 01101111 00101110 00100000 "; // Texto específico a ser copiado
    var inputTemporario = document.createElement("input");
    document.body.appendChild(inputTemporario);
    inputTemporario.setAttribute("value", textoEspecifico);
    inputTemporario.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemporario);
    alert("Codigo binario copiado para a area de tranferencia: ");
});

function mostrartempo() {
    let isAllZero = true; // Variável para rastrear se todos os valores são zero

    tempos.forEach((tempo, index) => {
        const valor = TempoParaFacul._formato[index];
        tempo.innerHTML = valor;

        // Verifique se o valor é igual a 0
        if (parseInt(valor) === 0) {
            // Se o valor for zero e todos os anteriores também forem zero, oculte o elemento
            if (isAllZero) {
                tempo.parentElement.style.display = 'none';
            }
        } else {
            // Se o valor não for zero, marque a flag como false
            isAllZero = false;
            // Exiba o elemento
            tempo.parentElement.style.display = 'block';
        }
    });
}

setInterval(mostrartempo,1000)
console.log(tempos);