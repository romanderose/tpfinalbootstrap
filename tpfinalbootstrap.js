/*------------------------------JUEGO------------------------------*/

let allinputs = document.querySelectorAll("input")
let botones = document.querySelectorAll(".botonesjuego")
let parrafos = document.querySelectorAll(".estadorespuesta")

//--------Pregunta 1--------

let input1= allinputs[0]
let boton1= botones[0]
let parrafo1= parrafos[0]

boton1.addEventListener('click', ()=>{

    if (input1.value === "verdadero") {
        parrafo1.textContent="Respuesta correcta. Sumaste 1 punto."
        parrafo1.style.color="green"
    } else {
        parrafo1.textContent="Respuesta incorrecta."
        parrafo1.style.color="red"
    }


})

//--------Pregunta 2--------

let input2= allinputs[1]
let boton2= botones[1]
let parrafo2= parrafos[1]

boton2.addEventListener('click', ()=>{

    if (input2.value === "pipo") {
        parrafo2.textContent="Respuesta correcta. Sumaste 1 punto."
        parrafo2.style.color="green"
    } else {
        parrafo2.textContent="Respuesta incorrecta."
        parrafo2.style.color="red"
    }


})

//--------Pregunta 3--------

let input3= allinputs[2]
let boton3= botones[2]
let parrafo3= parrafos[2]

boton3.addEventListener('click', ()=>{

    if (input3.value === "c") {
        parrafo3.textContent="Respuesta correcta. Sumaste 1 punto."
        parrafo3.style.color="green"
    } else {
        parrafo3.textContent="Respuesta incorrecta."
        parrafo3.style.color="red"
    }


})




