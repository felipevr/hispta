function setup() {
    createCanvas(windowWidth, windowHeight);
    
    frameRate(40);

    botao = new Botao('Iniciar', width/2, height/5*3);

    cenas = {
        jogo: new Jogo(),
        telaInicial: new TelaInicial()
    };
    cenas.jogo.setup();

    botao._alteraCena();
}

function keyPressed() {
    cenas[cenaAtual].keyPressed();
}

function keyReleased() {
    cenas[cenaAtual].keyReleased();
}

function draw() {
    cenas[cenaAtual].draw();

}

function windowResized() {
    let oldW = width;
    let oldH = height;
    resizeCanvas(windowWidth, windowHeight);

    cenas[cenaAtual].resize(oldW, oldH);
  }