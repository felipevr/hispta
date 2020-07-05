class Projetil {

    constructor(x, y, largura, altura, movimento) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.movimento = movimento;

    }

    exibe() {
        fill(95, 167, 255);
        stroke(55,113,255);
        ellipse(this.x,this.y,this.largura,this.altura);
    }

    move() {
        this.x += this.movimento;
    }

}