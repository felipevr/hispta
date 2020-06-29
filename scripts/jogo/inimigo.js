class Inimigo extends Animacao {
    constructor(imagem, x, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite) {
        super(imagem, x, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.velocidade = 15;
    }

    move() {
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura) {
            this.x = width;
        }


    }
}