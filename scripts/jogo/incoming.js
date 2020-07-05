class Incoming extends Animacao {
    constructor(imagem, x, variacaoY, 
        largura, altura, 
        larguraSprite, alturaSprite, 
        colunasSprite, linhasSprite,
        velocidade, atraso, precisao) {
        super(imagem, x, variacaoY, largura, altura);
        super.defineSprites(larguraSprite, alturaSprite, colunasSprite, linhasSprite);

        this.imagem = imagem;

        this.colunasSprite = colunasSprite;
        this.linhasSprite = linhasSprite;

        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.largura = largura;
        this.altura = altura;

        this.x = x;
        this.y = height - this.altura - variacaoY;
        this.yBase = this.y;

        this.frameX = 0;
        this.frameY = 0;

        this.precisao = 0.6;
        this.atraso = 0;

        this.velocidade = velocidade;

        
        if(atraso !== undefined) {
            this.atraso = atraso;
            this.x = width + this.atraso;
        }

        if(precisao !== undefined) {
            this.precisao = precisao;
        }
    }
    
    exibe() {
        //let a = this.frameX * this.larguraSprite;
        //let b = this.frameY * this.alturaSprite;
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.colunasSprite, this.linhasSprite, this.larguraSprite, this.alturaSprite);
        
        //noFill();
        //rect(this.x, this.y, this.largura, this.altura);
    }

    move() {
        this.x = this.x - this.velocidade;

        if(this.x < -this.largura - this.atraso) {
            this.x = width;
        }


    }
}