let input = document.querySelector("input")
let boton = document.querySelector("button")
let parrafos = document.querySelectorAll("p")

console.dir(parrafos)


boton.addEventListener('click', ()=>{

    if (input.value === "verdadero") {
        parrafos[8].textContent="Respuesta correcta. Sumaste 1 punto."
        parrafos[8].style.color="green"
    } else {
        parrafos[8].textContent="Respuesta incorrecta."
        parrafos[8].style.color="red"
    }


})


