function preload() {
    imgCenario = loadImage('imagens/cenario/floresta.png');

    imgPersonagem = loadImage('imagens/personagem/correndo.png');

    imgInimigo = loadImage('imagens/inimigos/gotinha.png');
    imgTroll = loadImage('imagens/inimigos/troll.png');
    imgVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

    imgGameover = loadImage('imagens/assets/game-over.png');
    imgVida = loadImage('imagens/assets/coracao.png');

    imgSplash = loadImage('imagens/assets/splash.svg');
    imgTelaInicial = loadImage('imagens/assets/telaInicial.png');

    fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

    somFundo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
}