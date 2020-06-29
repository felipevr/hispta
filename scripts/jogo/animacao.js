class Animacao {

    constructor(imagem, x, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite) {
        
        this.imagem = imagem;
        
        this.colunasSprite = colunasSprite;
        this.linhasSprite = linhasSprite;

        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.x = x;
        this.y = height - this.altura;

        this.largura = largura;
        this.altura = altura;

        this.frameX = 0;
        this.frameY = 0;
    }
        
    exibe(largura, altura) {
        let a = this.frameX * this.largura;
        let b = this.frameY * this.altura;
        image(this.imagem, this.x, this.y, this.largura, this.altura, a, b, this.larguraSprite, this.alturaSprite);

        this.anima();
    }

    anima() {
        this.frameX += 1;
        if(this.frameX >= this.colunasSprite) {
          this.frameX = 0;
          this.frameY += 1;
        }
        if(this.frameY >= this.linhasSprite) {
          this.frameY = 0;
        }

    }

}