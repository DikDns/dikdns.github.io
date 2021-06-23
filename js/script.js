// Hamburger Menu Script
const menuToggle = document.querySelector('.nav-menu-toggle input');
const nav = document.querySelector('.nav .nav-link');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});


