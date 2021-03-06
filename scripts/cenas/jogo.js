class Jogo extends Cena {
    constructor() {
        super();

        this.indice = 0;
        this.mapa = fita.mapa;

        this.cenario = new Cenario(imgCenario, 5);
        this.pontuacao = new Pontuacao();
        this.personagem = new Personagem(imgPersonagem, 220, 270, 4, 4);
        this.vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        this.inimigos = [];
    }

    setup() {

        //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, precisao)
        const inimigo2 = new Inimigo(imgInimigo, width - 52, 30, 52, 52, 104, 104, 4, 7, 10);
        const troll = new Inimigo(imgTroll, width + 250, 30, 200, 200, 400, 400, 5, 5, 8);
        const voador = new Inimigo(imgVoador, width + 500, 230, 100, 75, 200, 150, 3, 5, 15, 0.5);

        this.inimigos.push(inimigo2);
        this.inimigos.push(troll);
        this.inimigos.push(voador);

        //somFundo.loop();
    }

    keyPressed() {
        if (key === ' ') {
            this.personagem.pula(somPulo);
        }
    }

    draw() {

        this.cenario.exibe();
        this.cenario.move();

        this.vida.draw();
        //this.testeColisao();

        this.pontuacao.exibe();
        this.pontuacao.adicionarPontos();

        this.personagem.exibe();
        this.personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = this.inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (this.vida.vidas === 0) {
            this.gameOver();
        }

        if (this.personagem.estaColidindo(inimigo)) {
            this.vida.perdeVida();
            this.personagem.ficaInvencivel();


        }
    }

    gameOver() {
        image(imgGameover, width / 2 - 206, height / 2 - 39);

        textAlign(CENTER);
        fill('#ff0');
        textSize(20);
        text("PRESSIONE F5 PARA REINICIAR", width / 2, height - 150);
        somFundo.stop();
        noLoop();
    }

    testeColisao() {
        //background(255);

        hit = collideCircleCircle(mouseX, mouseY, 150, 200, 200, 100)

        // Use vectors as input.
        // let mouse  = createVector(mouseX, mouseY);
        // let circle = createVector(200,200);
        // hit = collideCircleCircleVector(mouse, 150, circle, 100)

        stroke((hit) ? color("red") : 0);

        ellipse(200, 200, 100, 100);
        ellipse(mouseX, mouseY, 150, 150);

        print("colliding? " + hit);

    }
}