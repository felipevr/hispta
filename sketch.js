let imgCenario;
let imgPersonagem;
let cenario;
let personagem;
let somFundo;

function preload() {
  imgCenario = loadImage('imagens/cenario/nuvens.png');
  imgPersonagem = loadImage('imagens/personagem/nship.png');
  somFundo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 5);
  personagem = new Personagem(imgPersonagem, 288, 128, 3, 5);
  frameRate(40);
  somFundo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.anima();
  personagem.exibe(height-150, 144, 64);
}
