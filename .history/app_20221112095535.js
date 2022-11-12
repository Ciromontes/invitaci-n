function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (Window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetwidth) + 'px';
}

let btnSi= document.getElenentById("btn_si");
let btnNo= document.getElenentById("btn_no");
let divModoPaseo = document.getElementsByClassName("modo_paseo")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target) });

btnSi.addEventListener( 'click', function(e){
    alert( 'que bueno que hayas aceptado te vas a divertir')

    divModoPaseo.style.display = 'block';
    const cancion = new Audio( 'img\calm-horbor-20583.mp3');
    cancion.play();
    });