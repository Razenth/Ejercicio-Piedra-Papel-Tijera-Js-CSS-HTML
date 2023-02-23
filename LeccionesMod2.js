let intentos=0
let intentosFlag=false

// Options
let opcionPiedra=document.getElementById('piedra')
let opcionPapel=document.getElementById('papel')
let opcionTijera=document.getElementById('tijera')

// Buttons

let botonInt=document.getElementById('intentos')
let botonJugar=document.getElementById('jugar')


botonInt.addEventListener('click',()=>{
    intentos=parseInt(prompt('Digite la cantidad de rondas a jugar'))
})

if (opcionPiedra.addEventListener){
    alert('Error debe ingresar primero un número de intentos')
}