let imgCenario;
let imgPersonagem;
let imgInimigo;
let cenario;
let personagem;
let inimigo;
let somFundo;

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  imgInimigo = loadImage('imagens/inimigos/gotinha.png');
  somFundo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 5);
  personagem = new Personagem(imgPersonagem, 220, 270, 4, 4);
  //(imagem, x, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite)
  inimigo = new Inimigo(imgInimigo, width - 52, 52, 52, 104, 104, 4, 7);
  frameRate(40);
  //somFundo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe(height-150, 110, 135);
  inimigo.exibe();
  inimigo.move();
}
