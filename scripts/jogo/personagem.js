class Personagem extends Animacao {
  constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

    super(imagem, 0, 0, 0, larguraSprite, alturaSprite, colunas, linhas);

  }
  
  exibe(y, largura, altura) {
    let a = this.frameX * this.larguraSprite;
    let b = this.frameY * this.alturaSprite;
    image(this.imagem, 10, y, largura, altura, a, b, this.larguraSprite, this.alturaSprite);
  }
  
}