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
        texto = texto + "<p>Você precisa trabalhar para desenvolver sua inteligência emocional. Apesar de sua sinceridade ser admirável, é provável que você se sinta sobrecarregado por suas emoções e lute para gerenciar emoções. Reagir a isso,explodindo, ou, pelo contrário, não expressando suas emoções, é igualmente prejudicial.</p>"
        texto = texto + "<p>Suas respostas às pressões comuns da vida podem estar baseadas no medo e na insegurança - em vez de paixão e propósito. No entanto, isto não precisa ser algo definitivo! A inteligência emocional não vem do nascimento: ela pode ser desenvolvida.</p>"
        texto = texto + "<p>Trabalhe sua autoconsciência, porque ela é o primeiro fundamento da inteligência emocional. Se parece muito difícil, não hesite em pedir ajuda para quem você considera ter muito conhecimento relacionado a oferecer. A intenção de desenvolver a inteligência emocional é o primeiro – e mais importante – passo.</p>"
    } else if (total >= 40 && total <= 59) {
        texto = texto + "<p>Seu nível de inteligência emocional ainda é um pouco baixo. Você tem mais dificuldade nas situações que exigem mais habilidades de interação social. É provável que se sinta frequentemente frustrado com colegas, ou até entes queridos por ter um “amortecedor” para lidar com situações e relacionamentos difíceis menos desenvolvido.</p>"
        texto = texto + "<p>Comece a trabalhar o autoconhecimento. Entenda quais habilidades são mais difíceis para você - pode ser a empatia, receber críticas, ou social skills básicas - e pratique-as. Olhe também para o que você já faz de bom e procure entender como consegue, para aplicar seus métodos bem-sucedidos aos novos aprendizados.</p>"
    } else if (total >= 60 && total <= 79) {
        texto = texto + "<p>Bom nível de inteligência emocional. É bem provável que você seja sensível às emoções dos que estão  ao seu redor - colegas, amigos, familiares e clientes. Você também tem consciência sobre o efeito do seu comportamento nos outros.</p>"
        texto = texto + "<p>Enquanto ser adepto a colocar as outras pessoas e suas necessidades a frente das suas é algo admirável, nem sempre é o melhor a se fazer. Não tenha medo de se comunicar honestamente e mostrar seus sentimentos, desde que com habilidade. Este é um dos aspectos mais importantes para desenvolver a inteligência emocional.</p>"
    } else if (total >= 80 && total <= 100){
        texto = texto + "<p>Se seus resultados estão neste intervalo, há duas possibilidades: ou você tem um nível de inteligência emocional extremamente alto, ou baixíssimo.</p>"
        texto = texto + "<p>Como isso é possível? Esses resultados podem refletir elevado grau de autoconhecimento - neste caso, ótimo! Mas não pare de buscar oportunidades de aprendizado. Ou, pelo contrário: podem ser consequência de uma grande falta de autoconhecimento, porque é preciso ser autoconsciente para se avaliar com precisão.</p>"
        texto = texto + "<p>A autoconsciência é a capacidade fundamental da inteligência emocional, porque ela reflete diretamente nas outras. É preciso ter noção sobre si próprio para mudar qualquer comportamento. Então, ou você chegou ao topo, ou tem um longo caminho pela frente.</p>"
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