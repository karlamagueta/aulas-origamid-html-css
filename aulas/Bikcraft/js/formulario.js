const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
    if(resposta.ok){
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radious: 4px; background: #f7f7f7;'> <span style='color:#317A00'>Mensagem enviada com sucesso.</span> Responderemos o mais breve possível</p>"
    }else {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radious: 4px; background: #f7f7f7;'> <span style='color:#E00000'>Erro no Envio.</span> Você pode enviar diretamente para o nosso email em contato@bikcraft </p>"
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector('form button');
    botao.disabled = true;
    botao.innerText = 'Enviando...';

    const data = new FormData(formulario);
    fetch('./enviar.php', {
        method: 'post',
        body: data
    }).then(formularioEnviado)
}

formulario.addEventListener('submit', enviarFormulario)