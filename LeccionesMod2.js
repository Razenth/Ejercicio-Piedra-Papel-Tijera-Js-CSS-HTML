let intentos=0
let contUsu=0
let contCPU=0
let contRond=1
let CPU=''

// Options
let opcionPiedra=document.getElementById('piedra')
let opcionPapel=document.getElementById('papel')
let opcionTijera=document.getElementById('tijera')
let options=document.getElementById('options')
let ptUsu=document.getElementById('usu')
let ptCPU=document.getElementById('cpu')
let rondasCont=document.getElementById('rondas')
let puntico=document.getElementById('puntico')
let DisplayIntentos=document.querySelector('#intentos')
let opcionUsu=0
let opcionCPU=0


// Displays
fin.style.display='none'
puntico.style.display= 'none'
rondasCont.style.visibility= 'hidden'
let botonInt=document.getElementById('intentos')
let botonJugar=document.getElementById('jugar')


botonInt.addEventListener('click',()=>{
    intentos=parseInt(prompt('Digite la cantidad de rondas a jugar'))
    while(intentos<=0){
        intentos=parseInt(prompt(`Error en el numero ingresado /n Intente de nuevo`))
    }
    DisplayIntentos.style.display='none'
    rondasCont.style.visibility= 'visible'
    rondasCont.innerHTML= (`RONDA ${contRond}`)
})


opcionPiedra.addEventListener('click',()=>{
        if(intentos<=0){
            alert('Error debe ingresar primero un número de intentos')
        }

        else{
            if(intentos<contRond){
                options.style.visibility='hidden'    
                fin.style.display='block'
                rondasCont.style.visibility='hidden'
                    if(contUsu>contCPU){
                        fin.innerHTML=`
                        <h1>¡YOU WIN!</h1>
                        <p>Felicidades le ganaste a la maquina <br>Tú puntuación fue de ${contUsu}</p>
                        <button id="volver" class="volver">Volver a jugar</button>
                        `
                    }else if(contCPU==contUsu){
                        fin.innerHTML=`
                        <h1>¡EMPATE!</h1>
                        <p>Bien jugado, buena suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                        <button id="volver" class="volver">Volver a jugar</button>
                        `
                    }else{
                        fin.innerHTML=`
                        <h1>YOU LOSE</h1>
                        <p>Suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                        <button id="volver" class="volver">Volver a jugar</button>
                        `
                    }
                    volver.addEventListener('click',()=>{
                        intentos=0
                        contUsu=0
                        ptUsu.innerText=(`${contUsu}`)
                        contCPU=0
                        ptCPU.innerText=(`${contCPU}`)
                        contRond=1
                        CPU=''
                        fin.style.display='none'
                        DisplayIntentos.style.display='block'
                        options.style.visibility='visible'
                    })
            }

            else{
            opcionUsu=1
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
                    puntico.innerHTML=(`
                    <h1>Empate ambos sacaron ${CPU}</h1>`)
                    puntico.style.display='block'
                    options.style.visibility='hidden'
                    rondasCont.style.visibility= 'hidden'
                    setTimeout(()=>{
                        puntico.style.display='none'
                        options.style.visibility='visible'
                        rondasCont.style.visibility= 'visible'
                    },2000)
                    contRond+=1
                    rondasCont.innerHTML= (`RONDA ${contRond}`)
                }
            
                else if (opcionCPU==3 && opcionUsu==1){
                    puntico.innerHTML=(`
                    <h1>Punto para ti</h1> 
                    <p>La máquina saco ${CPU}</p>
                    `)
                    puntico.style.display='block'
                    options.style.visibility='hidden'
                    rondasCont.style.visibility= 'hidden'
                    setTimeout(()=>{
                        puntico.style.display='none'
                        options.style.visibility='visible'
                        rondasCont.style.visibility= 'visible'
                    },2000)
                    contRond+=1
                    contUsu+=1
                    rondasCont.innerHTML=(`RONDA ${contRond}`)
                    ptUsu.innerText=(`${contUsu}`)
                }
            
                else{
                    puntico.innerHTML=(`<h1>Punto para la máquina</h1> <p>La máquina sacó ${CPU}</p>`)
                    puntico.style.display='block'
                    options.style.visibility='hidden'
                    rondasCont.style.visibility= 'hidden'
                    setTimeout(()=>{
                        puntico.style.display='none'
                        options.style.visibility='visible'
                        rondasCont.style.visibility= 'visible'
                    },2000)
                    contRond+=1
                    contCPU+=1
                    rondasCont.innerHTML= (`RONDA ${contRond}`)
                    ptCPU.innerText=(`${contCPU}`)
                }
            }
        }
})

opcionPapel.addEventListener('click',()=>{
    if(intentos<=0){
        alert('Error debe ingresar primero un número de intentos')
    }

    else{
        if(intentos<contRond){
            options.style.visibility='hidden'    
            fin.style.display='block'
            rondasCont.style.visibility='hidden'
                if(contUsu>contCPU){
                    fin.innerHTML=`
                    <h1>¡YOU WIN!</h1>
                    <p>Felicidades le ganaste a la maquina <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }else if(contCPU==contUsu){
                    fin.innerHTML=`
                    <h1>¡EMPATE!</h1>
                    <p>Bien jugado, buena suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }else{
                    fin.innerHTML=`
                    <h1>YOU LOSE</h1>
                    <p>Suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }
                volver.addEventListener('click',()=>{
                    intentos=0
                    contUsu=0
                    ptUsu.innerText=(`${contUsu}`)
                    contCPU=0
                    ptCPU.innerText=(`${contCPU}`)
                    contRond=1
                    CPU=''
                    fin.style.display='none'
                    DisplayIntentos.style.display='block'
                    options.style.visibility='visible'
                })
        }
        else{
        opcionUsu=2
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
                puntico.innerHTML=(`
                <h1>Empate ambos sacaron ${CPU}</h1>`)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
            }
        
            else if (opcionCPU==1 && opcionUsu==2){
                puntico.innerHTML=(`
                <h1>Punto para ti</h1> 
                <p>La máquina saco ${CPU}</p>
                `)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                contUsu+=1
                rondasCont.innerHTML=(`RONDA ${contRond}`)
                ptUsu.innerText=(`${contUsu}`)
            }
        
            else{
                puntico.innerHTML=(`<h1>Punto para la máquina</h1> <p>La máquina sacó ${CPU}</p>`)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                contCPU+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
                ptCPU.innerText=(`${contCPU}`)
            }
        }
    }
})

opcionTijera.addEventListener('click',()=>{
    if(intentos<=0){
        alert('Error debe ingresar primero un número de intentos')
    }

    else{
        if(intentos<contRond){
            options.style.visibility='hidden'
            rondasCont.style.visibility='hidden'   
            fin.style.display='block'
                if(contUsu>contCPU){
                    fin.innerHTML=`
                    <h1>¡YOU WIN!</h1>
                    <p>Felicidades le ganaste a la maquina <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }else if(contCPU==contUsu){
                    fin.innerHTML=`
                    <h1>¡EMPATE!</h1>
                    <p>Bien jugado, buena suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }else{
                    fin.innerHTML=`
                    <h1>YOU LOSE</h1>
                    <p>Suerte para la próxima <br>Tú puntuación fue de ${contUsu}</p>
                    <button id="volver" class="volver">Volver a jugar</button>
                    `
                }
                volver.addEventListener('click',()=>{
                    intentos=0
                    contUsu=0
                    ptUsu.innerText=(`${contUsu}`)
                    contCPU=0
                    ptCPU.innerText=(`${contCPU}`)
                    contRond=1
                    CPU=''
                    fin.style.display='none'
                    DisplayIntentos.style.display='block'
                    options.style.visibility='visible'
                })
        }

        else{
        opcionUsu=3
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
                puntico.innerHTML=(`
                <h1>Empate ambos sacaron ${CPU}</h1>`)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
            }
        
            else if (opcionCPU==2 && opcionUsu==3){
                puntico.innerHTML=(`
                <h1>Punto para ti</h1> 
                <p>La máquina saco ${CPU}</p>
                `)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                contUsu+=1
                rondasCont.innerHTML=(`RONDA ${contRond}`)
                ptUsu.innerText=(`${contUsu}`)
            }
        
            else{
                puntico.innerHTML=(`<h1>Punto para la máquina</h1> <p>La máquina sacó ${CPU}</p>`)
                puntico.style.display='block'
                options.style.visibility='hidden'
                rondasCont.style.visibility= 'hidden'
                setTimeout(()=>{
                    puntico.style.display='none'
                    options.style.visibility='visible'
                    rondasCont.style.visibility= 'visible'
                },2000)
                contRond+=1
                contCPU+=1
                rondasCont.innerHTML= (`RONDA ${contRond}`)
                ptCPU.innerText=(`${contCPU}`)
            }
    }
}
})