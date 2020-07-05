class Animacao {

    constructor(imagem, x, variacaoY, largura, altura) {

        this.imagens = [];
        this.imagens[0] = imagem;
        this.imagem = this.imagens[0];

        this.largura = largura;
        this.altura = altura;

        this.x = x;
        this.variacaoY = variacaoY;
        this.y = this.yBase = height - this.altura - variacaoY;

        this.frameX = 0;
        this.frameY = 0;

        this.spriteDeslocamentoX = 0;
        this.spriteDeslocamentoY = 0;

        this.precisao = 0.6;
    }

    defineSprites(larguraSprite, alturaSprite, colunasSprite, linhasSprite) {
        this.colunasSprite = colunasSprite;
        this.linhasSprite = linhasSprite;

        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
    }

    defineImagem(imagem, indice) {
        if(indice === undefined) {
            indice = 0;
        }

        this.imagens[indice] = imagem;
    }

    exibe(imagem) {

        if(imagem === undefined) {
            imagem = this.imagem;
        }

        let a = this.frameX * this.larguraSprite + this.spriteDeslocamentoX;
        let b = this.frameY * this.alturaSprite + this.spriteDeslocamentoY;
        image(imagem, this.x, this.y, this.largura, this.altura, a, b, this.larguraSprite, this.alturaSprite);

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

    resize(oldW, oldH) {
        this.y = this.y * height/oldH;
        this.yBase = height - this.altura - this.variacaoY;
    }

}