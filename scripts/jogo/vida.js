class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;
        this.vidas = this.inicial;

        this.largura = 50;
        this.altura = 45;
    }

    draw() {
        for(let i = 0; i < this.vidas; i++) {

        }
        
        image(imgVida, 0, 0, this.largura, this.altura);
    }
}