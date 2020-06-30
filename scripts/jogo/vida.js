class Vida {
    constructor(total, inicial) {
        this.total = total;
        this.inicial = inicial;
        this.vidas = this.inicial;

        this.largura = 35;
        this.altura = 30;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for(let i = 0; i < this.vidas; i++) {
            const margem = i * 18;
            const posicao = this.xInicial * (i + 1);

            image(imgVida, posicao + margem, this.y, this.largura, this.altura);
        }
        
    }

    ganhaVida() {
        if (this.vidas <= this.total) {
            this.vidas++;
        }
    }

    perdeVida() {
        this.vidas--;
    }
}