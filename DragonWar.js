
let ataqueJugador
let ataqueOponente
let resultadoBatalla
let vidasJugador = 3
let vidasRival =3
let resultadoFinal

function iniciarJuego(){
    let selectionAtaque = document.getElementById('selec-ataque')
    selectionAtaque.style.display = 'none'

    let selectionReinicio = document.getElementById('boton-reiniciar')
    selectionReinicio.style.display = 'none'

    let radioBtns = document.querySelectorAll('input[type="radio"]');
    for (var i=0; i<radioBtns.length;i++){
        radioBtns[i].addEventListener('change',function(){
            if(this.checked){
                botonDragonJugador.style.display='block';
            } else{
                botonDragonJugador.style.display='none';
            }
        });
    }

    let botonDragonJugador = document.getElementById('boton-dragon');
    botonDragonJugador.addEventListener('click', seleccionarDragonJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click' , ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click' , ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click' , ataqueTierra)
    let botonElectricidad = document.getElementById('boton-electricidad')
    botonElectricidad.addEventListener('click' , ataqueElectricidad)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarDragonJugador(){
    let selectionMascota = document.getElementById('selec-dragon')
    selectionMascota.style.display = 'none'


    let selectionAtaque = document.getElementById('selec-ataque')
    selectionAtaque.style.display = 'flex'


    let inputFlareon = document.getElementById('flareon')
    let inputMizuchi = document.getElementById('mizuchi')
    let inputKrakatoa = document.getElementById('krakatoa')
    let inputFulgor = document.getElementById('fulgor')
    let inputPyrothor = document.getElementById('pyrothor')
    let inputGaia = document.getElementById('gaia')
    let spanDragonJugador = document.getElementById('dragon-jugador')

    let imagenDragonJugador = document.getElementById('imagenDragonJugador')
    let dragonUno = document.createElement('img');
    let dragonDos = document.createElement('img');
    let dragonTres = document.createElement('img');
    let dragonCuatro = document.createElement('img');
    let dragonCinco = document.createElement('img');
    let dragonSeis = document.createElement('img');

    dragonUno.src= '/images/dragonFire.jpg'
    dragonDos.src= '/images/dragonWater.jpg'
    dragonTres.src= '/images/dragonEarth.jpg'
    dragonCuatro.src= '/images/dragonElectry.jpg'
    dragonCinco.src= '/images/dragonFuegoElectric.jpg'
    dragonSeis.src= '/images/dragonAguaTierra.jpg'
    

    if(inputFlareon.checked){
        spanDragonJugador.innerHTML = ' Flareon'
        imagenDragonJugador.appendChild(dragonUno)
    }else if(inputMizuchi.checked){
        spanDragonJugador.innerHTML = 'Mizuchi'
        imagenDragonJugador.appendChild(dragonDos)
    }else if(inputKrakatoa.checked){
            spanDragonJugador.innerHTML = 'Krakatoa'
        imagenDragonJugador.appendChild(dragonTres)
    }else if(inputFulgor.checked){
        spanDragonJugador.innerHTML = 'Fulgor'
        imagenDragonJugador.appendChild(dragonCuatro)
    }else if(inputPyrothor.checked){
        spanDragonJugador.innerHTML = 'Pyrothor'
        imagenDragonJugador.appendChild(dragonCinco)
    }else if(inputGaia.checked){
        spanDragonJugador.innerHTML = 'Gaia'
        imagenDragonJugador.appendChild(dragonSeis)
    }else {
        reiniciarJuego();
    }

    seleccionarDragonRival();
    
}

function seleccionarDragonRival(){
    let dragonAleatorio = aleatorio(1,6);
    let spanDragonRival = document.getElementById('dragon-enemigo');
    let imagenDragonRival = document.getElementById('imagenDragonEnemigo')
    let dragonUno = document.createElement('img');
    let dragonDos = document.createElement('img');
    let dragonTres = document.createElement('img');
    let dragonCuatro = document.createElement('img');
    let dragonCinco = document.createElement('img');
    let dragonSeis = document.createElement('img');

    dragonUno.src= '../images/dragonFire.jpg'
    dragonDos.src= '../images/dragonWater.jpg'
    dragonTres.src= '../images/dragonEarth.jpg'
    dragonCuatro.src= '../images/dragonElectry.jpg'
    dragonCinco.src= '../images/dragonFuegoElectric.jpg'
    dragonSeis.src= '../images/dragonAguaTierra.jpg'


    if(dragonAleatorio == 1){
        swal('FLAREON','El PC escogio a Flareon como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Flareon'
        imagenDragonRival.appendChild(dragonUno)
    }else if(dragonAleatorio == 2){
        swal('MIZUCHI','El PC escogio a Mizuchi como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Mizuchi'
        imagenDragonRival.appendChild(dragonDos)
    }else if(dragonAleatorio == 3){
        swal('KRAKATOA','El PC escogio a Krakatoa como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Krakatoa'
        imagenDragonRival.appendChild(dragonTres)
    }else if(dragonAleatorio == 4){
        swal('FULGOR','El PC escogio a Fulgor como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Fulgor'
        imagenDragonRival.appendChild(dragonCuatro)
    }else if(dragonAleatorio == 5){
        swal('PYROTHOR','El PC escogio a Pyrothor como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Pyrothor'
        imagenDragonRival.appendChild(dragonCinco)
    }else if(dragonAleatorio == 6){
        swal('GAIA','El PC escogio a Gaia como tu oponente', 'info');
        spanDragonRival.innerHTML = 'Gaia'
        imagenDragonRival.appendChild(dragonSeis)
    }

}

function ataqueFuego() {
    ataqueJugador = 'ALIENTO DE FUEGO'
    // swal('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueAgua() {
    ataqueJugador = 'ALIENTO DE HIELO'
    // swal('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueTierra() {
    ataqueJugador = 'RAFAGA DE VIENTO'
    // swal('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueElectricidad() {
    ataqueJugador = 'PODER DE TIERRA'
    // swal('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}


function seleccionarAtaqueRival(){
    let ataqueRival = aleatorio(1,4)

    if(ataqueRival == 1){
        ataqueOponente = 'ALIENTO DE FUEGO'
    }else if(ataqueRival == 2){
        ataqueOponente = 'ALIENTO DE HIELO'      
    }
    else if(ataqueRival == 3){
        ataqueOponente = 'RAFAGA DE VIENTO'     
    }
    else if(ataqueRival == 4){
        ataqueOponente = 'PODER DE TIERRA'  }

    batallaDragones();
    crearMensaje();
    
}
function batallaDragones(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasRival = document.getElementById('vidas-rival')

    if(ataqueJugador == ataqueOponente) {
        resultadoBatalla = 'EMPATE'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
    }else if( ataqueJugador == 'ALIENTO DE FUEGO' && ataqueOponente == 'ALIENTO DE HIELO'){
        resultadoBatalla = 'GANASTE'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'ALIENTO DE HIELO' && ataqueOponente == 'RAFAGA DE VIENTO'){
        resultadoBatalla = 'GANASTE'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'RAFAGA DE VIENTO' && ataqueOponente == 'PODER DE TIERRA'){
        resultadoBatalla = 'GANASTE'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'PODER DE TIERRA' && ataqueOponente == 'ALIENTO DE FUEGO'){
        resultadoBatalla = 'GANASTE'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else {
        resultadoBatalla = 'PIERDES'
        swal('El Dragon rival lanza '+ ataqueOponente +' a tu dragon: '+ resultadoBatalla)
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    
    ////Revisar Vidas
    revisarVidas();


}

function revisarVidas(){
    let cartaUno = document.getElementById('cartaUno')
    let cartaDos = document.getElementById('cartaDos')

    if(vidasJugador == 0){
        resultadoFinal = "LASTIMOSAMENTE PERDISTE"
        // alert(resultadoFinal)
        mensajeFinal();
        cartaUno.style.display = 'none'
    }else if( vidasRival == 0){
        resultadoFinal = "FELICITACIONES GANASTE"
        // alert(resultadoFinal)
        mensajeFinal();
        cartaDos.style.display = 'none'
    }
}
function crearMensaje(){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataqueDelJugador')
    let ataqueDelEnemigo = document.getElementById('ataqueDelEnemigo')

    
    // let nuevoAtaqueDelJugador = document.createElement('p')
    // let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoBatalla
    ataqueDelJugador.innerHTML = ataqueJugador
    ataqueDelEnemigo.innerHTML = ataqueOponente

    // ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    // ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function mensajeFinal(){
    let sectionMensajes = document.getElementById('resultado2')
    let resMensaje = document.getElementById('res-mensaje')

    sectionMensajes.innerHTML= resultadoFinal
    resMensaje.innerHTML = 'Dragon Ganador'

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonElectricidad = document.getElementById('boton-electricidad')
    botonElectricidad.disabled = true

    let prueba = document.getElementById('resultado')
    prueba.style.display = 'none'
    let selectAtaque = document.getElementById('selectAtaque')
    selectAtaque.style.display = 'none'
    let eligeAtaque = document.getElementById('res-mensaje2')
    eligeAtaque.style.display = 'none'
    let selectionReinicio = document.getElementById('boton-reiniciar')
    selectionReinicio.style.display = 'block'
}


function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min)
}


window.addEventListener('load', iniciarJuego);