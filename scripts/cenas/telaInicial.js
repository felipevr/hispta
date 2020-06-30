class TelaInicial extends Cena {
    constructor() {
        super();

    }

    draw() {
        this._imagemDefundo();
        this._texto();
        this._botao();
    }

    _imagemDefundo() {
        image(imgTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textAlign(CENTER);
        textFont(fontTelaInicial);
        textSize(70);
        text('As Aventuras de', width/2, height/3);
        textSize(120);
        text('Hipsta', width/2, height/2);
    }

    _botao() {
        botao.y = height / 7 * 5;
        botao.draw();
    }
}