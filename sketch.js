function setup() {
    createCanvas(windowWidth, windowHeight);
    
    frameRate(40);

    cenas = {
        jogo: new Jogo(),
        telaInicial: new TelaInicial()
    };
    cenaAtual = 'jogo';

    cenas[cenaAtual].setup();
}

function keyPressed() {
    cenas[cenaAtual].keyPressed();
}

function draw() {
    cenas[cenaAtual].draw();

}

