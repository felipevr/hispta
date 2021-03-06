class Personagem extends Animacao {
    constructor(imagem, larguraSprite, alturaSprite, colunas, linhas) {

        super(imagem, 10, 30, 110, 135, larguraSprite, alturaSprite, colunas, linhas);

        this.velocidadeDoPulo = 0;
        this.aceleracao = 0;
        this.gravidade = 3;
        this.alturaPulo = -50;

        this.pulos = 0;

        this.invencivel = false;

        this.precisao = 0.6;

        this.exibirColisor = false;

        if(this.exibirColisor) {
            collideDebug(true);
        }
    }

    exibe() {
        if (!this.pisca) {
            super.exibe();
        }

        if (this.invencivel) {
            if(parseInt(cenas[cenaAtual].pontuacao.pontos*10) % 3 == 0) {
                this.pisca = !this.pisca;
            }
        } else {
            this.pisca = false;
        }
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

    ficaInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    estaColidindo(inimigo) {

        if(this.invencivel) {
            return false;
        }

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