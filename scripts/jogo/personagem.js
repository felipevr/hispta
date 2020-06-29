class Personagem extends Animacao {
  constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

    super(imagem, 10, 0, 0, larguraSprite, alturaSprite, colunas, linhas);

  }
  
  exibe(y, largura, altura) {
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    super.exibe();
  }
  
}