class Inimigo extends Animacao {
    constructor(imagem, x, variacaoY, 
        largura, altura, 
        larguraSprite, alturaSprite, 
        colunasSprite, linhasSprite,
        velocidade, precisao) {
        super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.velocidade = velocidade;
        this.x = width;

        if(precisao !== undefined) {
            this.precisao = precisao;
        }
    }

    move() {
        this.x = this.x - this.velocidade;
    }

    aparece() {
        this.x = width;
    }
}