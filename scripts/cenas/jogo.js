class Jogo extends Cena {
    constructor() {
        super();

        this.indice1 = 0;
        this.indice2 = -1;

        this.cenario = new Cenario(imgCenario, 5);
        this.pontuacao = new Pontuacao();
        this.personagem = new Personagem(imgPersonagem, 288, 128, 3, 5);
        this.vida = new Vida(4,4);
        
        this.inimigos = [];
    }

    setup() {

        //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, atraso)
        const nave1 = new Incoming(imgShips, width - 52,   30, 120, 140,  60,  70,   0,  14, 10, 30);
        const nave2 = new Incoming(imgShips, width + 250, 430, 100,  80,  50,  40, 155,  95, 8, 100);
        const nave3 = new Incoming(imgShips, width + 500, 230, 100,  80,  50,  40, 300, 140, 1, 50, 0.5);
        const nave4 = new Incoming(imgShips, width + 500, 230, 100, 100,  50,  50,   0, 185, 1, 50, 0.5);

        this.inimigos.push(nave1);
        this.inimigos.push(nave2);
        this.inimigos.push(nave3);
        this.inimigos.push(nave4);

        somFundo.loop();
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

        let inimigo = this.inimigos[this.indice1];
        let inimigoVazou = inimigo.x < -inimigo.largura;
        let inimigo2;
        let indice2Vazou = false;

        if(this.indice2 !== -1) {
            inimigo2 = this.inimigos[this.indice2];
            indice2Vazou = inimigo2.x < -inimigo2.largura;

            inimigo2.exibe();
            inimigo2.move();

            if (this.personagem.estaColidindo(inimigo2)) {
                this.gameOver();
            }
        }

        inimigo.exibe();
        inimigo.move();

        if (inimigoVazou) {
            this.indice1++;
            if (this.indice1 > this.inimigos.length - 1) {
                this.indice1 = 1;
            }
            this.inimigos[this.indice1].velocidade = parseInt(random(15, 35));

            if(this.indice2 == -1) {
                this.indice2 = 0; //floor(random(0, this.inimigos.length));
            }
        }

        if (indice2Vazou) {
            this.indice2 = this.indice1 - 1;
            this.inimigos[this.indice2].velocidade = parseInt(random(15, 30));
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