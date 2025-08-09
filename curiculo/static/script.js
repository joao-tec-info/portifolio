const menuMobile = document.querySelector('.menu-mobile');
const aside = document.getElementById('header');
const main = document.getElementById('main');
const body = document.getElementById('body');

menuMobile.addEventListener('click', () => { 
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    aside.classList.toggle("menu-nav-active");
    main.classList.toggle("main-menu-active"); 
    body.classList.toggle("menu-aberto");
       
       
});


/* Fecha o menu quando clicar em icone*/
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (aside.classList.contains("menu-nav-active")) {
            menuMobile.classList.replace("bi-x", "bi-list");
            aside.classList.remove("menu-nav-active");
            main.classList.remove("main-menu-active");
            body.classList.remove("menu-aberto");
        }
    });
});