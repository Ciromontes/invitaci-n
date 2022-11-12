function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px' ;
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px' ;
}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoinvitacion = document.getElementsByClassName("modo_paseo")[0]

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e){
    alert('que bueno que hayas aceptado te vas a divertir')

    divModoinvitacion.style.display = 'block';
    const cancion = new Audio('img\\calm-horbor-20583.mp3');
    cancion.play();
})