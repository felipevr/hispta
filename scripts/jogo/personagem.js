class Personagem {
  constructor(imagem, largura, altura, colunas, linhas) {
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.colunas = colunas;
    this.linhas = linhas;
    this.posX = 0;
    this.posY = 0;
  }
  
  exibe(y, largura, altura) {
    let a = this.posX * this.largura;
    let b = this.posY * this.altura;
    image(this.imagem, 10, y, largura, altura, a, b, this.largura, this.altura);
  }
  
  anima() {
    this.posX += 1;
    if(this.posX >= this.colunas) {
      this.posX = 0;
      this.posY += 1;
    }
    if(this.posY >= this.linhas) {
      this.posY = 0;
    }
  }
}