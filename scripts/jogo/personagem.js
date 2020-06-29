class Personagem extends Animacao {
  constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

    super(imagem, 10, 110, 135, larguraSprite, alturaSprite, colunas, linhas);

    this.yBase = this.y;

    this.velocidadeDoPulo = 0;
    this.gravidade = 0;

  }
  
  pula() {
    //this.y = this.y - 50;
    this.velocidadeDoPulo = this.velocidadeDoPulo - 50;
    this.gravidade = 3;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.yBase) {
      this.y = this.yBase;
      this.velocidadeDoPulo = 0;
      this.gravidade = 0;
    }

  }

  estaColidindo(inimigo) {

    noFill();
    const precisao = .63;
    rect(this.x, this.y, this.largura * precisao, this.altura);
    rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura);
    //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
    const hit = collideRectRect(this.x, this.y, this.largura * precisao, this.altura,
            inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura);

    return hit;
  }
  
}