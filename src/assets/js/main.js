// Declarando Variaveis
var toggleModal = document.querySelectorAll(".toggle-modal");
var toggleMenu = document.querySelectorAll(".toggle-menu");
var menuMobile = document.querySelector(".navBar-mobile");
var btnMenuMobImg = document.querySelector(".btn-menu-mob ion-icon"); 

//Abrindo e Fechado Modal Mensagem
for (i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function () {
        var modalMensagem = document.querySelector(".field-modal");
        var overlay = document.querySelector(".overlay");

            overlay.classList.toggle("open");
            modalMensagem.classList.toggle("open");
            modalMensagem.classList.toggle("slider-top-in");
    });
}


//Abrindo e Fechado Menu Mobile
for (m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener("click", function () {
        var overlay = document.querySelector(".menu-overlay");

            overlay.classList.toggle("open");
            menuMobile.classList.toggle("close-menu");
            menuMobile.classList.toggle("open-menu");

            var icon = btnMenuMobImg.getAttribute("name"); 
            
            if (icon === "menu-outline") {
                btnMenuMobImg.setAttribute("name", "close-outline");
            } else{
                btnMenuMobImg.setAttribute("name", "menu-outline");
            }
    });
}

