function toggleMenu(){
    const menu=document.querySelector(".hamburger-menu-link");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}