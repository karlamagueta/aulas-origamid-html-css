// Ativar links do menu

const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = window.location.href
    const href = link.href;
    url.includes    
    if (url.includes(href)){
        link.classList.add('ativo')
    }

    console.log(url)
}

links.forEach(ativarLink);

//Ativar itens do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    elemento.checked = true
        if (elemento) {
            elemento.checked = true;
        }
}

parametros.forEach(ativarProduto)

console.log(parametros);

//Faq
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta )
}

perguntas.forEach(eventosPerguntas);


// Galeria de Imagens
const galeria = document.querySelectorAll('.bicicleta-img img')
const galeriaContainer = document.querySelector('.bicicleta-img')

function trocarImagem(event){
    const img = event.currentTarget;
    window.matchMedia('(min-width: 1000px)').matches;
    if (media) {}
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

// Iniciando Plugin de Animação
if (window.SimpleAnime){
    new SimpleAnime();
}
