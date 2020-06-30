class Inimigo extends Animacao {
    constructor(imagem, x, variacaoY, 
        largura, altura, 
        larguraSprite, alturaSprite, 
        colunasSprite, linhasSprite,
        velocidade, atraso, precisao) {
        super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.velocidade = velocidade;
        this.atraso = atraso;
        this.x = width + this.atraso;

        if(precisao !== undefined) {
            this.precisao = precisao;
        }
    }

    move() {
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura - this.atraso) {
            this.x = width;
        }


    }
}