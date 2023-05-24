
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

    dragonUno.src= '../images/dragonFire.jpg'
    dragonDos.src= '../images/dragonWater.jpg'
    dragonTres.src= '../images/dragonEarth.jpg'
    dragonCuatro.src= '../images/dragonElectry.jpg'
    dragonCinco.src= '../images/dragonFuegoElectric.jpg'
    dragonSeis.src= '../images/dragonAguaTierra.jpg'
    

    if(inputFlareon.checked){
        alert('Seleccionaste a Flareon')
        spanDragonJugador.innerHTML = 'Flareon'
        imagenDragonJugador.appendChild(dragonUno)
    }else if(inputMizuchi.checked){
        alert('Seleccionaste a Mizuchi')
        spanDragonJugador.innerHTML = 'Mizuchi'
        imagenDragonJugador.appendChild(dragonDos)
    }else if(inputKrakatoa.checked){
        alert('Seleccionaste a Krakatoa')
        spanDragonJugador.innerHTML = 'Krakatoa'
        imagenDragonJugador.appendChild(dragonTres)
    }else if(inputFulgor.checked){
        alert('Seleccionaste a Fulgor')
        spanDragonJugador.innerHTML = 'Fulgor'
        imagenDragonJugador.appendChild(dragonCuatro)
    }else if(inputPyrothor.checked){
        alert('Seleccionaste a Pyrothor')
        spanDragonJugador.innerHTML = 'Pyrothor'
        imagenDragonJugador.appendChild(dragonCinco)
    }else if(inputGaia.checked){
        alert('Seleccionaste a Gaia')
        spanDragonJugador.innerHTML = 'Gaia'
        imagenDragonJugador.appendChild(dragonSeis)
    }else {
        alert('Selecciona un Dragon')
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
        alert('Tu oponente escogio Flareon')
        spanDragonRival.innerHTML = 'Flareon'
        imagenDragonRival.appendChild(dragonUno)
    }else if(dragonAleatorio == 2){
        alert('Tu oponente escogio Mizuchi')
        spanDragonRival.innerHTML = 'Mizuchi'
        imagenDragonRival.appendChild(dragonDos)
    }else if(dragonAleatorio == 3){
        alert('Tu oponente escogio Krakatoa')
        spanDragonRival.innerHTML = 'Krakatoa'
        imagenDragonRival.appendChild(dragonTres)
    }else if(dragonAleatorio == 4){
        alert('Tu oponente escogio Fulgor')
        spanDragonRival.innerHTML = 'Fulgor'
        imagenDragonRival.appendChild(dragonCuatro)
    }else if(dragonAleatorio == 5){
        alert('Tu oponente escogio Pyrothor')
        spanDragonRival.innerHTML = 'Pyrothor'
        imagenDragonRival.appendChild(dragonCinco)
    }else if(dragonAleatorio == 6){
        alert('Tu oponente escogio Gaia')
        spanDragonRival.innerHTML = 'Gaia'
        imagenDragonRival.appendChild(dragonSeis)
    }

}

function ataqueFuego() {
    ataqueJugador = 'ALIENTO DE FUEGO'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueAgua() {
    ataqueJugador = 'ALIENTO DE HIELO'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueTierra() {
    ataqueJugador = 'RAFAGA DE VIENTO'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}
function ataqueElectricidad() {
    ataqueJugador = 'PODER DE TIERRA'
    alert('Tu Dragon lanza '+ ataqueJugador +' a su oponente')
    seleccionarAtaqueRival();
}


function seleccionarAtaqueRival(){
    let ataqueRival = aleatorio(1,4)

    if(ataqueRival == 1){
        ataqueOponente = 'ALIENTO DE FUEGO'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
        

    }else if(ataqueRival == 2){
        ataqueOponente = 'ALIENTO DE HIELO'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
        
    }
    else if(ataqueRival == 3){
        ataqueOponente = 'RAFAGA DE VIENTO'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
       
    }
    else if(ataqueRival == 4){
        ataqueOponente = 'PODER DE TIERRA'
        alert('El Dragon rival lanza '+ ataqueOponente +' a tu dragon')
    }

    batallaDragones();
    crearMensaje();
    
}
function batallaDragones(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasRival = document.getElementById('vidas-rival')

    if(ataqueJugador == ataqueOponente) {
        resultadoBatalla = 'EMPATE'
        alert('EMPATE')
    }else if( ataqueJugador == 'ALIENTO DE FUEGO' && ataqueOponente == 'ALIENTO DE HIELO'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'ALIENTO DE HIELO' && ataqueOponente == 'RAFAGA DE VIENTO'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'RAFAGA DE VIENTO' && ataqueOponente == 'PODER DE TIERRA'){
        resultadoBatalla = 'GANASTE'
        alert('GANASTE')
        vidasRival--
        spanVidasRival.innerHTML=vidasRival
    }else if( ataqueJugador == 'PODER DE TIERRA' && ataqueOponente == 'ALIENTO DE FUEGO'){
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
function crearMensaje(){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataqueDelJugador')
    let ataqueDelEnemigo = document.getElementById('ataqueDelEnemigo')

    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoBatalla
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueOponente

    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function mensajeFinal(){
    let sectionMensajes = document.getElementById('resultado2')

    sectionMensajes.innerHTML= resultadoFinal

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