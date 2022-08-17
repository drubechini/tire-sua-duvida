
let nomeDigitado = prompt('Digite o seu nome: ')

let mensagem = `Olá ${nomeDigitado}! <br>Concentre-se e pense na sua pergunta. Quando estiver pronto(a), clique no botão abaixo para ver a resposta.`

document.getElementById('mensagem').innerHTML = mensagem



let resposta = document.getElementById("resposta");

var mensagemResposta = ['A resposta é sim!', 'Talvez você esteja com razão.', 'O melhor caminho é tentar.', 'Serei direto: NÃO!', 'Siga o seu coração :)', 'Sinceramente não posso te ajudar :(', 'Não acho que seja uma boa ideia.', 'Melhor pensar mais a respeito...', 'Você está no caminho certo!', 'Quem não arrisca, não petisca.', 'Vai dar certo! :D', 'Seu esforço será recompensado!'];

function respostaSorteada() {
    resposta.innerHTML = mensagemResposta[Math.floor(Math.random() * 12)];

}
