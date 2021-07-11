// When the user scrolls down 250px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (250px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById('nav').style.top = "0";
  } else {
    document.getElementById('nav').style.top = "-100px";
  }
}





// Hamburger Menu Script
const menuToggle = document.querySelector('.nav-menu-toggle input');
const nav = document.querySelector('.nav .nav-link');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});


//! Language Script 
// select language
const langBtn = document.querySelector(".lang-button");
const langList = document.querySelector(".lang-dropdown .list");
const langArrow = document.querySelector('.lang-button .arrow-icon');

// Button function to run
langBtn.addEventListener('click', function(){
    langList.classList.toggle("show-the-link");
    langArrow.classList.toggle("arrow-rotate");
});

// Close it if the user click outside of it
window.onclick = function(event) {
    if (!event.target.matches('.lang-button')){
        let dropdowns = document.getElementsByClassName("list");
        for(let i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-the-link')) {
                openDropdown.classList.remove('show-the-link');
                langArrow.classList.remove("arrow-rotate");
            }
        }
    }
    if (!event.target.matches('.btn-toggle')){
        nav.classList.remove('slide');
        document.querySelector('.btn-toggle').checked = false;
    }
};