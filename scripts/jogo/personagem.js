class Personagem extends Animacao {
    constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

        super(imagem, 10, 100, 144, 64, larguraSprite, alturaSprite, colunas, linhas);

        this.velocidadeDoPulo = 0;
        this.aceleracao = 0;
        this.gravidade = 0.1;
        this.alturaPulo = -5;

        this.precisao = 0.6;

        this.exibirColisor = false;

        if(this.exibirColisor) {
            collideDebug(true);
        }
    }

    pula() {
        this.velocidadeDoPulo = this.alturaPulo;
        this.aceleracao = this.gravidade;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.aceleracao;

        if (this.y > this.yBase) {
            this.y = this.yBase;
            this.velocidadeDoPulo = 0;
            this.aceleracao = 0;
            this.pulos = 0;
        }

        if (this.y <= 0) {
            this.y = 10;
        }

    }

    estaColidindo(inimigo) {

        //const dadosPersonagem = [this.x + (this.largura * precisaoInversa), this.y + (this.altura * precisaoInversa), this.largura * precisao, this.altura * precisao];
        const dadosPersonagem = this.calculaPrecisao(this);
        const dadosInimigo = this.calculaPrecisao(inimigo); //[inimigo.x * precisaoInversa, inimigo.y * precisaoInversa, inimigo.largura * precisao, inimigo.altura * precisao];

        //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
        const hit = collideRectRect(...dadosPersonagem, ...dadosInimigo);

        if (this.exibirColisor) {
            stroke((hit) ? color("red") : 0);

            noFill();
            rect(...dadosPersonagem);
            rect(...dadosInimigo);
        }

        return hit;
    }

    calculaPrecisao(objeto) {
        let precisao = objeto.precisao;
        const precisaoInversa = (1 - precisao) / 2;

        return [objeto.x + (objeto.largura * precisaoInversa), objeto.y + (objeto.altura * precisaoInversa), objeto.largura * precisao, objeto.altura * precisao];
    }

}