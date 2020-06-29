class Personagem extends Animacao {
  constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

    super(imagem, 10, 110, 135, larguraSprite, alturaSprite, colunas, linhas);

    this.yBase = this.y;

    this.velocidadeDoPulo = 0;
    this.gravidade = 0;

    this.pulos = 0;

  }
  
  pula(somPulo) {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = - 50;
      this.gravidade = 3;
      this.pulos++;
      somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if(this.y > this.yBase) {
      this.y = this.yBase;
      this.velocidadeDoPulo = 0;
      this.gravidade = 0;
      this.pulos = 0;
    }

    if(this.y <= 0) {
      this.y = 10;
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