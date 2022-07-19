// menu 
const menu = document.querySelector(".nav__links")
const menuButton = document.querySelector(".nav_icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("nav__open");
    menuButton.classList.toggle("open");
})