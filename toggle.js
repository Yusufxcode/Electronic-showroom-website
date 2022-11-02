const menu = document.querySelector('#mobile_mode');
const menuLinks = document.querySelector('.nav_menu');

function toggle() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', toggle);
