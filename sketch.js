function setup() {
    createCanvas(windowWidth, windowHeight);
    
    frameRate(40);

    botao = new Botao('Iniciar', width/2, height/5*3);

    cenas = {
        jogo: new Jogo(),
        telaInicial: new TelaInicial()
    };
    cenas.jogo.setup();
}
/*
function draw() {
  cenario.exibe();
  cenario.move();
  personagem.anima();
  personagem.exibe(height-150, 144, 64);
}
*/
function keyPressed() {
    cenas[cenaAtual].keyPressed();
}

function draw() {
    cenas[cenaAtual].draw();

}

