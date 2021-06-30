// Hamburger Menu Script
const menuToggle = document.querySelector('.nav-menu-toggle input');
const nav = document.querySelector('.nav .nav-link');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});



// select button
var btn1 = document.getElementById("dropdown-1");
var arrow1 = document.getElementById('arrow-1');


// Button function
function dropdownBtnLang() {
    btn1.classList.toggle("show-the-link");
};


// Close it if the user click outside of it
window.onclick = function(event) {
    if (!event.target.matches('.lang-button')){
        let dropdowns = document.getElementsByClassName("list");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-the-link')) {
                openDropdown.classList.remove('show-the-link');
            }
        }
    }
    if (!event.target.matches('.btn-toggle')){
        nav.classList.remove('slide');
        document.querySelector('.btn-toggle').checked = false;
    }
};