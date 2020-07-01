function preload() {
    imgCenario = loadImage('imagens/cenario/nuvens.png');

    imgPersonagem = loadImage('imagens/personagem/nship.png');
    imgPersonagemInverse = loadImage('imagens/personagem/nship_damaged.png');

    imgShips = loadImage('imagens/inimigos/shipsheetparts.png');

    imgGameover = loadImage('imagens/assets/game-over.png');
    imgVida = loadImage('imagens/assets/coracao.png');

    imgSplash = loadImage('imagens/assets/splash.svg');
    imgTelaInicial = loadImage('imagens/assets/telaInicial.png');

    fontTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    
    somPulo = loadSound('sons/somPulo.mp3');

    somFundo = loadSound('sons/techno.mp3');
    
    fita = loadJSON('fita/fita.json');
}