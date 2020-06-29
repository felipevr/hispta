class Personagem extends Animacao {
    constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

        super(imagem, 10, 30, 110, 135, larguraSprite, alturaSprite, colunas, linhas);

        this.velocidadeDoPulo = 0;
        this.aceleracao = 0;
        this.gravidade = 3;
        this.alturaPulo = -50;

        this.pulos = 0;

        this.exibirColisor = false;
    }

    pula(somPulo) {
        if (this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaPulo;
            this.aceleracao = this.gravidade;
            this.pulos++;
            somPulo.play();
        }
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
        const precisaoX = .63;
        const precisaoY = .7

        //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
        const hit = collideRectRect(this.x, this.y, this.largura * precisaoX, this.altura * precisaoY,
            inimigo.x, inimigo.y, inimigo.largura * precisaoX, inimigo.altura * precisaoY);

        if (this.exibirColisor) {
            stroke((hit) ? color("red") : 0);

            noFill();
            rect(this.x, this.y, this.largura * precisaoX, this.altura * precisaoY);
            rect(inimigo.x, inimigo.y, inimigo.largura * precisaoX, inimigo.altura * precisaoY);
        }

        return hit;
    }

}