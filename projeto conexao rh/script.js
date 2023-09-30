var botaoEnviar = document.getElementById("botao-enviar");

botaoEnviar.addEventListener("click", function () {
    var erros = [];
    for (let indice = 1; indice <= 20; indice++) {
        let div = document.querySelector(`.conteudo-questao-${indice}`)
        if (aPerguntaFoiRespondida(indice) == false) {
            // Adiciona a classe na div
            div.classList.add("questao-nao-respondida");
            erros.push(indice);
        } else {
            // remove a classe da div 
            div.classList.remove("questao-nao-respondida");
            // Adiciona a classe na div
            div.classList.add("questao-respondida");
        }
    }

    if (erros.length > 0) {
        return alert(`Responda a(s) questão(ões): ${erros}`)
    }

    var total = 0;
    for (let indice = 1; indice <= 20; indice++) {
        total = parseInt(total) + parseInt(pegarResposta(indice));
    }

    var texto = "";

    texto = texto + `<p class='resposta-pontuacao'>Sua pontuação foi: ${total} pontos</p>`;

    if (total >= 20 && total <= 39) {
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
    } else if (total >= 40 && total <= 59) {
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
    } else if (total >= 60 && total <= 79) {
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
    } else if (total >= 80 && total <= 100) {
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
        texto = texto + "<p></p>"
    }

    // Div que mostra a resposta, está escondida com display: none no CSS
    var divMensagemResposta = document.getElementById("mensagem-resposta");
    // Mensagem das pontuações
    var mensagemRespostaTexto = document.getElementById("mensagem-resposta-texto");

    // Remove o display: none do CSS e começa a mostrar na tela
    divMensagemResposta.style.display = "block";

    mensagemRespostaTexto.innerHTML = texto;
});

function aPerguntaFoiRespondida(numeroDaQuestao) {
    var foiRespondida = false;
    for (let indice = 1; indice <= 5; indice++) {
        var pergunta = document.getElementById(`pergunta${numeroDaQuestao}_${indice}`);
        if (pergunta.checked) {
            foiRespondida = true;
        }
    }
    return foiRespondida;
}

function pegarResposta(numeroDaQuestao) {
    var resposta = 1;
    for (let indice = 1; indice <= 5; indice++) {
        var pergunta = document.getElementById(`pergunta${numeroDaQuestao}_${indice}`);
        if (pergunta.checked) {
            resposta = pergunta.value;
        }
    }
    return resposta;
}