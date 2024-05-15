// let menu = document.queryselector("#menu")
let menu = document.getElementById("menu")
let iconesBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")
function abrirFecharMenu() {
   
    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // Abri o menu
        menu.classList.remove("menu-fechado")

        // Mostrar icone X
        iconeX.style.display = "inline"

        // Esconder icone Barras
        iconesBarras.style.display= "none"
        
    }
    else {
        // Fechar o menu
        menu.classList.add("menu-fechado")

       // Mostrar icone X
       iconeX.style.display = "none"

       // Esconder icone Barras
       iconesBarras.style.display= "inline"

    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconesBarras.style.display= "none"
}

// Função Carrosel

let slides = [
    'primeiro-banner',
    "segundo-banner",
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove(slides[slideAtual])

    // numeroSlides = 3
    // numeroSlides - 1 -> 2
    // estou no ultimo? 2

    // [0, 1, 2]
    
    if(slideAtual < (numeroSlides - 1) ) {
        slideAtual++
    } else {
        slideAtual = 0
    }
    
    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const mostrarSlideAnterior = () => {
    // Remove slide anterior

    // numeroSlides = 3
    // numeroSlides - 1 -> 2
    
    // [0, 1, 2]

    banner.classList.remove(slides[slideAtual])

    if(slideAtual > 0) {
        slideAtual--
    } else {
        slideAtual = numeroSlides - 1
    }

    // Renderiza o slideAtual
    banner.classList.add(slides[slideAtual])
}

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide) )

    slideAtual = indiceSlide

    banner.classList.add(slides[indiceSlide])
}

let listaCases = [
    {
        imagem: "https://unsplash.it/600/400?image=14",
        descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionários devem propor e implementar ideias inovadoras.",
    },
    {
        imagem: "https://unsplash.it/600/400?image=41",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento",
    },
    {
        imagem: "https://unsplash.it/600/400?image=23",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking",
    },
    {
        imagem: "https://unsplash.it/600/400?image=62",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    }
]   

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")
    
    // Template Strings
    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
        <img src="${cardCase.imagem}" alt="">
        <p>${cardCase.descricao}</p>
        <button>Ver mais</button>
   </div>` 
    })

    elementoLista.innerHTML = template
}