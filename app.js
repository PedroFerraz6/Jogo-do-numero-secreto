


var listaNum = []

var num = 10
var numeroSecreto = gerarNumero()
var tentativa = 0



// Envia o texto em js para html
function inserirTexto(tag, txt) {
    let texto = document.querySelector(tag);
    texto.innerHTML = txt;
    responsiveVoice.speak(txt, 'Brazilian Portuguese Female', {rate:1.2});
}


// Texto em js da tela inicial
function textoInicial() {
    inserirTexto('h1', 'Jogo do numero secreto');
    inserirTexto('p', 'Insira um numero entre 1 a ' + num);
}


// ativa a função e volta o texto ao começo
textoInicial();


// função de selecionar um numero
function gerarNumero() {
    let numGerado = parseInt(Math.random() * num + 1)
    let tamanhoLista = listaNum.length

    console.log(numGerado)
    console.log(listaNum)

    if (tamanhoLista == num) {
        listaNum = []
    }

    if (listaNum.includes(numGerado)) {
        return gerarNumero()

    } else {
        listaNum.push(numGerado)
        return numeroSecreto = numGerado
    }
}


// função do botão chute
function verificarChute() {
    let chute = document.querySelector('input').value;

    tentativa++
    limparChute()

    if (chute == numeroSecreto) {
        inserirTexto('h1', 'Acertou')

        let textoTentativa = tentativa == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativa = `Você conseguiu com ${tentativa} ${textoTentativa}`;

        inserirTexto('p', mensagemTentativa)

        document.getElementById('reiniciar').removeAttribute('disabled')

    } else if (chute > numeroSecreto) {
        inserirTexto('p', 'É menor');

    } else {
        inserirTexto('p', 'É maior')
    }
}


// Limpa o input
function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
}


// Novo jogo
function novoJogo() {
    limparChute()
    textoInicial()
    gerarNumero()
    tentativa = 0
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
