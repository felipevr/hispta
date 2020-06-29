let imgCenario;
let imgPersonagem;
let imgInimigo, imgTroll, imgVoador;
let imgGameover;

let cenario;
let personagem;
let somFundo, somPulo;
let pontuacao;

const inimigos = [];

function preload() {
    imgCenario = loadImage('imagens/cenario/floresta.png');

    imgPersonagem = loadImage('imagens/personagem/correndo.png');

    imgInimigo = loadImage('imagens/inimigos/gotinha.png');
    imgTroll = loadImage('imagens/inimigos/troll.png');
    imgVoador = loadImage('imagens/inimigos/gotinha-voadora.png');

    imgGameover = loadImage('imagens/assets/game-over.png');

    somFundo = loadSound('sons/trilha_jogo.mp3');
    somPulo = loadSound('sons/somPulo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imgCenario, 5);
    pontuacao = new Pontuacao();
    personagem = new Personagem(imgPersonagem, 220, 270, 4, 4);

    //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, atraso)
    const inimigo = new Inimigo(imgInimigo, width - 52, 30, 52, 52, 104, 104, 4, 7, 10, 300);
    const troll = new Inimigo(imgTroll, width + 250, 30, 200, 200, 400, 400, 5, 5, 8, 1000);
    const voador = new Inimigo(imgVoador, width + 500, 230, 100, 75, 200, 150, 3, 5, 15, 500);

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(voador);

    frameRate(40);
    //somFundo.loop();
}

function keyPressed() {
    if (key === ' ') {
        personagem.pula(somPulo);
    }
}

function draw() {

    cenario.exibe();
    cenario.move();

    //testeColisao();

    pontuacao.exibe();
    pontuacao.adicionarPontos();

    personagem.exibe();
    personagem.aplicaGravidade();

    inimigos.forEach(inimigo => {

        inimigo.exibe();
        inimigo.move();

        if (personagem.estaColidindo(inimigo)) {
            image(imgGameover, width / 2 - 206, height / 2 - 39)
            noLoop();
        }
    });

}

function testeColisao() {
    //background(255);

    hit = collideCircleCircle(mouseX, mouseY, 150, 200, 200, 100)

    // Use vectors as input.
    // let mouse  = createVector(mouseX, mouseY);
    // let circle = createVector(200,200);
    // hit = collideCircleCircleVector(mouse, 150, circle, 100)

    stroke((hit) ? color("red") : 0);

    ellipse(200, 200, 100, 100);
    ellipse(mouseX, mouseY, 150, 150);

    print("colliding? " + hit);

}