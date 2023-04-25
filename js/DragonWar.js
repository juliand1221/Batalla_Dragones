
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
    selectionAtaque.style.display = 'block'


    let inputFlareon = document.getElementById('flareon')
    let inputMizuchi = document.getElementById('mizuchi')
    let inputKrakatoa = document.getElementById('krakatoa')
    let inputFulgor = document.getElementById('fulgor')
    let inputPyrothor = document.getElementById('pyrothor')
    let inputGaia = document.getElementById('gaia')
    let spanDragonJugador = document.getElementById('dragon-jugador')



    if(inputFlareon.checked){
        alert('Seleccionaste a Flareon')
        spanDragonJugador.innerHTML = 'Flareon'
    }else if(inputMizuchi.checked){
        alert('Seleccionaste a Mizuchi')
        spanDragonJugador.innerHTML = 'Mizuchi'
    }else if(inputKrakatoa.checked){
        alert('Seleccionaste a Krakatoa')
        spanDragonJugador.innerHTML = 'Krakatoa'
    }else if(inputFulgor.checked){
        alert('Seleccionaste a Fulgor')
        spanDragonJugador.innerHTML = 'Fulgor'
    }else if(inputPyrothor.checked){
        alert('Seleccionaste a Pyrothor')
        spanDragonJugador.innerHTML = 'Pyrothor'
    }else if(inputGaia.checked){
        alert('Seleccionaste a Gaia')
        spanDragonJugador.innerHTML = 'Gaia'
    }else {
        alert('Selecciona un Dragon')
    }

    seleccionarDragonRival();
    
}

function seleccionarDragonRival(){
    let dragonAleatorio = aleatorio(1,6);
    let spanDragonRival = document.getElementById('dragon-enemigo');

    if(dragonAleatorio == 1){
        alert('Tu oponente escogio Flareon')
        spanDragonRival.innerHTML = 'Flareon'
    }else if(dragonAleatorio == 2){
        alert('Tu oponente escogio Mizuchi')
        spanDragonRival.innerHTML = 'Mizuchi'
    }else if(dragonAleatorio == 3){
        alert('Tu oponente escogio Krakatoa')
        spanDragonRival.innerHTML = 'Krakatoa'
    }else if(dragonAleatorio == 4){
        alert('Tu oponente escogio Fulgor')
        spanDragonRival.innerHTML = 'Fulgor'
    }else if(dragonAleatorio == 5){
        alert('Tu oponente escogio Pyrothor')
        spanDragonRival.innerHTML = 'Pyrothor'
    }else if(dragonAleatorio == 6){
        alert('Tu oponente escogio Gaia')
        spanDragonRival.innerHTML = 'Gaia'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueElectricidad() {
    ataqueJugador = 'ELECTRICIDAD'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}

function seleccionarAtaqueRival(){
    let ataqueRival = aleatorio(1,4)

    if(ataqueRival == 1){
        ataqueOponente = 'FUEGO'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
        

    }else if(ataqueRival == 2){
        ataqueOponente = 'AGUA'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
        
    }
    else if(ataqueRival == 2){
        ataqueOponente = 'TIERRA'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
       
    }
    else if(ataqueRival == 2){
        ataqueOponente = 'ELECTRICIDAD'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
    }

    batallaDragones();
    crearMensaje();
    
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu dragon ataco con ' +ataqueJugador +', Tu oponente ataco con ' +ataqueOponente + ' - ' +resultadoBatalla;

    sectionMensajes.appendChild(parrafo)
}

function mensajeFinal(){
    let sectionMensajeFinal = document.getElementById('mensaje-final')

    let parrafoFinal =document.createElement('p')
    parrafoFinal.innerHTML= resultadoFinal

    sectionMensajeFinal.appendChild(parrafoFinal)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonElectricidad = document.getElementById('boton-electricidad')
    botonElectricidad.disabled = true

    let selectionReinicio = document.getElementById('boton-reiniciar')
    selectionReinicio.style.display = 'block'
}

function batallaDragones(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasRival = document.getElementById('vidas-rival')

    if(ataqueJugador == ataqueOponente) {
        resultadoBatalla = 'EMPATE'
        alert('EMPATE')
    }else if( ataqueJugador == 'FUEGO' && ataqueOponente == 'ELECTRICIDAD'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'AGUA' && ataqueOponente == 'FUEGO'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'TIERRA' && ataqueOponente == 'ELECTRICIDAD'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'ELECTRICIDAD' && ataqueOponente == 'AGUA'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else {
        resultadoBatalla = 'PIERDES'
        alert('PERDISTE')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    
    ////Revisar Vidas
    revisarVidas();


}

function revisarVidas(){

    if(vidasJugador == 0){
        resultadoFinal = "LASTIMOSAMENTE PERDISTE 😔"
        alert(resultadoFinal)
        mensajeFinal();
    }else if( vidasRival == 0){
        resultadoFinal = "FELICITACIONES GANASTE 😁🎉🍾🎊"
        alert(resultadoFinal)
        mensajeFinal();
    }
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min)
}


window.addEventListener('load', iniciarJuego);