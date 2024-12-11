var ursinho = [
    "urso-1.png",
    "urso-2.png",
    "urso-3.png"
];

var contador = 0;
var passeio = 0;

function andar(){
    var imagem = document.querySelector("#ursinho");
    imagem.src = ursinho[contador % 3];
    imagem.style.left = passeio + 'px';
    contador += 1;
    passeio += 15;
};

setInterval(andar, 250);