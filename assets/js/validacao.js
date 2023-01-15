export function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)

    }

}

export function validaTextArea(textarea) {
    const tipoDeInput = textarea.dataset.tipo;

    if(textarea.validity.valid) {
        textarea.parentElement.classList.remove('input-container--invalido')
        textarea.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    }else {
        textarea.parentElement.classList.add('input-container--invalido')
        textarea.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErroTextArea(tipoDeInput, textarea)
    }

}


const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagemDeErro = {
    nome: {
        valueMissing: "O campo do nome não deve ficar em branco ou vazio.",
        patternMismatch: "O campo de nome não deve exceder 50 caracteres"
    },
    email: {
        valueMissing: "O campo de email não pode estar vazio.",
        typeMismatch: "O email digitado não é valido."
    },
    assunto: {
        valueMissing: "O campo do assunto não deve ficar em branco ou vazio.",
        patternMismatch: "O campo de assunto não deve exceder 50 caracteres"
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ""

    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem;
}

function mostraMensagemDeErroTextArea(tipoDeInput, textarea){
    let mensagem = ""

    tiposDeErro.forEach(erro => {
        if(textarea.validity[erro]) {
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })

    return mensagem;
}
