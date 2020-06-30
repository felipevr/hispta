class Jogo extends Cena {
    constructor() {
        super();

        this.inimigoAtual = 0;

        this.cenario = new Cenario(imgCenario, 5);
        this.pontuacao = new Pontuacao();
        this.personagem = new Personagem(imgPersonagem, 288, 128, 3, 5);
        this.vida = new Vida(4,4);
        
        this.inimigos = [];
    }

    setup() {

        //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, atraso)
        const inimigo2 = new Inimigo(imgInimigo, width - 52, 30, 52, 52, 104, 104, 4, 7, 10, 300);
        const troll = new Inimigo(imgTroll, width + 250, 30, 200, 200, 400, 400, 5, 5, 8, 1000);
        const voador = new Inimigo(imgVoador, width + 500, 230, 100, 75, 200, 150, 3, 5, 15, 500, 0.5);

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

        const inimigo = this.inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.inimigoAtual++;
            if (this.inimigoAtual > this.inimigos.length - 1) {
                this.inimigoAtual = 0;
            }
            inimigo.velocidade = parseInt(random(10, 30));
        }

        if (this.personagem.estaColidindo(inimigo)) {
            this.gameOver();
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