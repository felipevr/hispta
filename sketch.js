let imgCenario;
let imgPersonagem;
let cenario;
let personagem;
let somFundo;

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  somFundo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 5);
  personagem = new Personagem(imgPersonagem, 220, 270, 4, 4);
  frameRate(40);
  somFundo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.anima();
  personagem.exibe(height-150, 110, 135);
}
