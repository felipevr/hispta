class Inimigo extends Animacao {
    constructor(imagem, x, variacaoY, 
        largura, altura, 
        larguraSprite, alturaSprite, 
        colunasSprite, linhasSprite,
        velocidade, atraso) {
        super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.velocidade = velocidade;
        this.atraso = atraso;
        this.x = width + this.atraso;
    }

    move() {
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura - this.atraso) {
            this.x = width;
        }


    }
}