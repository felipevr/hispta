class Animacao {

    constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite) {

        this.imagem = imagem;

        this.colunasSprite = colunasSprite;
        this.linhasSprite = linhasSprite;

        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.largura = largura;
        this.altura = altura;

        this.x = x;
        this.y = height - this.altura - variacaoY;
        this.yBase = this.y;

        this.frameX = 0;
        this.frameY = 0;

        this.precisao = 0.6;
    }

    exibe() {
        let a = this.frameX * this.larguraSprite;
        let b = this.frameY * this.alturaSprite;
        image(this.imagem, this.x, this.y, this.largura, this.altura, a, b, this.larguraSprite, this.alturaSprite);

        this.anima();
    }

    anima() {
        this.frameX += 1;
        if (this.frameX >= this.colunasSprite) {
            this.frameX = 0;
            this.frameY += 1;
        }
        if (this.frameY >= this.linhasSprite) {
            this.frameY = 0;
        }

    }

}