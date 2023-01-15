import { valida } from "./validacao.js"
import { validaTextArea } from "./validacao.js"

const inputs = document.querySelectorAll('input') 
const textareas = document.querySelectorAll('textarea')

inputs.forEach(input => {

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })

})

textareas.forEach(textarea => {
    textarea.addEventListener('blur', (evento) => {
        validaTextArea(evento.target)
    })
})