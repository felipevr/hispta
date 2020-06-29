class Inimigo extends Animacao {
    constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite) {
        super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.velocidade = 15;
    }

    move() {
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura) {
            this.x = width;
        }


    }
}