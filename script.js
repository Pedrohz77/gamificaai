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