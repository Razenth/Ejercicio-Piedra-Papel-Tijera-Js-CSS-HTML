let intentos=0
let contRond=1
let CPU=''
let intentosFlag=false

// Options
let opcionPiedra=document.getElementById('piedra')
let opcionPapel=document.getElementById('papel')
let opcionTijera=document.getElementById('tijera')
let options=document.getElementById('options')
let ptUsu=document.getElementById('usu')
let ptCPU=document.getElementById('cpu')
let rondasCont=document.getElementById('rondas')
let opcionUsu=0
let opcionCPU=0
ptUsu=0



rondasCont.style.visibility= 'hidden'

// Buttons

let botonInt=document.getElementById('intentos')
let botonJugar=document.getElementById('jugar')


botonInt.addEventListener('click',()=>{
    intentos=parseInt(prompt('Digite la cantidad de rondas a jugar'))
    rondasCont.style.visibility= 'visible'
    rondasCont.innerHTML= (`RONDA ${contRond}`)
    intentosFlag=true
})


opcionPiedra.addEventListener('click',()=>{
    if(intentos<=0){
        alert('Error debe ingresar primero un número de intentos')
    }

    else{
        opcionUsu=1
        for (rondas=0;rondas<=intentos;i++){

            opcionCPU= Math.ceil(Math.random()*3)
        
            if (opcionCPU==1){
                CPU='Piedra'
            }
        
            else if (opcionCPU==2){
                CPU='Papel'
            }
        
            else{
                CPU='Tijeras'
            }
        
            if (opcionCPU==opcionUsu){
                alert(`Empate ambos sacaron ${CPU}`)
                contRond+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
            }
        
            else if (opcionCPU==1 && opcionUsu==2 || opcionCPU==2 && opcionUsu==3 || opcionCPU==3 && opcionUsu==1){
                alert(`Punto para ti \n La máquina saco ${CPU}`)
                contRond+=1
                ptUsu.innerHTML+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
            }
        
            else{
                alert(`Punto para la máquina \n La máquina sacó ${CPU}`)
                contRond+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
                ptCPU.innerHTML+=1
            }
    }
    }
})

opcionPapel.addEventListener('click',()=>{
    if(intentos<=0){
        alert('Error debe ingresar primero un número de intentos')
    }

    else{
        opcionUsu=2
    }
})

opcionTijera.addEventListener('click',()=>{
    if(intentos<=0){
        alert('Error debe ingresar primero un número de intentos')
    }

    else{
        opcionUsu=3
    }
})

if(intentos>0){

for (rondas=0;rondas<=intentos;i++){

    opcionCPU= Math.ceil(Math.random()*3)

    if (opcionCPU==1){
        CPU='Piedra'
    }

    else if (opcionCPU==2){
        CPU='Papel'
    }

    else{
        CPU='Tijeras'
    }

    if (opcionCPU==opcionUsu){
        alert(`Empate ambos sacaron ${CPU}`)
        contRond+=1
    }

    else if (opcionCPU==1 && opcionUsu==2 || opcionCPU==2 && opcionUsu==3 || opcionCPU==3 && opcionUsu==1){
        alert(`Punto para ti \n La máquina saco ${CPU}`)
        contRond+=1
        ptUsu.innerHTML+=1
    }

    else{
        alert(`Punto para la máquina \n La máquina sacó ${CPU}`)
        contRond+=1
        ptCPU.innerHTML+=1
    }
}}