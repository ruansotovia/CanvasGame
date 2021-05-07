function Sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	
	this.desenha = function(xCanvas, yCanvas){
		ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura,);
	}
}

var bg = new Sprite(0, 0, 1350, 600),
spritePersonagem = new Sprite(48, 743, 112, 78),
jogar = new Sprite(1037, 756, 232, 79),
perdeu = new Sprite(395, 756, 378, 74);