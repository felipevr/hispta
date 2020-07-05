class Jogo extends Cena {
    constructor() {
        super();

        this.mapa = fita.mapa;

        this.velocidade = 5;

        this.cenario = new Cenario(imgCenario, this.velocidade);
        this.pontuacao;        

        this.personagem = new Personagem(imgPersonagem, imgPersonagemInverse);
        this.personagem.defineSprites(288, 128, 3, 5);

        this.fimDoJogo = false;
        this.pausado = false;

        this.exibirEstatistica = false;
        
        this.inimigos = [];
        this.projeteis = [];

    }

    start() {
        this.fimDoJogo = false;

        this.indice1 = 0;
        this.indice2 = -1;

        this.indice = 0;

        this.pontuacao = new Pontuacao();
        //this.vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        this.vida = new Vida(5, 5);

        somFundo.loop();
    }

    setup() {
        this.start();

        //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, atraso)
        const nave1 = new Incoming(imgShips, width - 52,   30, 120, 140,  60,  70,   0,  14, 10, 30);
        const nave2 = new Incoming(imgShips, width + 250, 430, 100,  80,  50,  40, 155,  95, 8, 100);
        const nave3 = new Incoming(imgShips, width + 500, 230, 100,  80,  50,  40, 300, 140, 1, 50, 0.5);
        const nave4 = new Incoming(imgShips, width + 500, 230, 100, 100,  50,  50,   0, 185, 1, 50, 0.5);
        
        //(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, colunasSprite, linhasSprite, velocidade, precisao)
        //const inimigo2 = new Inimigo(imgInimigo, width - 52, 30, 52, 52, 104, 104, 4, 7, 10);

        this.inimigos.push(nave1);
        this.inimigos.push(nave2);
        this.inimigos.push(nave3);
        this.inimigos.push(nave4);

    }

    keyPressed() {
        if (keyIsDown(80) || keyIsDown(19)) {
            this.pausa();
        }
        else if (keyCode == 87 || keyCode == UP_ARROW) {
            this.personagem.sobe(1);
        }
        else if (keyCode == 83 || keyCode == DOWN_ARROW) {
            this.personagem.desce(1);
        }
        else if (keyCode == 32 || keyCode == RIGHT_ARROW) {
            let p = this.personagem.atira(1);
            if(p !== undefined) {
                this.projeteis.push(p);
            }
        }
        if (this.fimDoJogo) {
            if (key === 'Escape' || key === 'Enter') {
                this.start();
                loop();
            }
        }
    }

    keyReleased() {
        if (keyCode == 87 || keyCode == UP_ARROW) {
            this.personagem.sobe(-1);
        }
        else if (keyCode == 83 || keyCode == DOWN_ARROW) {
            this.personagem.desce(-1);
        }
        else if (keyCode == 32 || keyCode == RIGHT_ARROW) {
            this.personagem.atira(-1);
        }
    }

    checkKeyDown() {
        if (keyIsDown(80) || keyIsDown(19)) {
            this.pausa();
        }
        else if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
            this.personagem.sobe(2);
        }
        else if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
            this.personagem.desce(2);
        }
        else if (keyIsDown(32) || keyIsDown(RIGHT_ARROW)) {
            this.personagem.atira(2);
        }
    }

    draw() {
        background(0, 100, 200);

        //console.log(width, height);

        this.cenario.exibe();

        this.vida.draw();
        //this.testeColisao();

        this.pontuacao.exibe();

        this.exibeEstatisticas();

        this.personagem.exibe();

        if(this.pausado || !focused) {
            textAlign(CENTER);
            fill('#ff0');
            textSize(50);
            text("PAUSA", width / 2, height /2 - 50);

            return;
        }

        const contador = parseInt(getFrameRate()/5);
        if(frameCount % contador == 0) {
            this.checkKeyDown();
        }        
        
        this.cenario.move();
        this.pontuacao.adicionarPontos();
        this.personagem.move();

        this.verificaProjeteis();

        this.verificaInimigos();

        if (this.vida.vidas === 0) {
            this.gameOver();
        }

    }

    verificaProjeteis() {
        let remove = -1;
        for(let i = 0; i < this.projeteis.length; i++) {
            let e = this.projeteis[i];
            e.exibe();
            e.move();
            if(e.x > width) {
                remove = i;
            }
        }
        if(remove !== -1) {
            this.projeteis.splice(remove,1);
        }
    }

    verificaInimigos() {
        
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
                this.vida.perdeVida();
                this.personagem.ficaInvencivel();
            }
        }

        //inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVazou) {
            /*
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }*/
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
            this.vida.perdeVida();
            this.personagem.ficaInvencivel();
        }
    }

    resize(oldW, oldH) {
        this.personagem.resize(oldW, oldH);
        this.inimigos.forEach(e => e.resize(oldW, oldH) );
        this.cenario.resize();
    }

    pausa() {
        this.pausado = !this.pausado;
        if(this.pausado) {
            noLoop();
            somFundo.stop();
        } else {
            somFundo.play();
            loop();
        }
    }

    gameOver() {
        image(imgGameover, width / 2 - 206, height / 2 - 39);

        this.fimDoJogo = true;

        textAlign(CENTER);
        fill('#ff0');
        textSize(20);
        text("PRESSIONE ENTER OU ESCAPE PARA TENTAR NOVAMENTE", width / 2, height - 150);
        somFundo.stop();
        noLoop();
    }

    
    exibeEstatisticas() {
        if(!this.exibirEstatistica) {
            return;
        }
        
        textAlign(RIGHT);
        fill('#ff0');
        textSize(50);
        text(this.personagem.estatistica(), width - 30, 100);

        text(this.projeteis.length, width - 30, 150);
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