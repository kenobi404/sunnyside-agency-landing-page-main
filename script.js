const navToggle = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelector('.bars')
const close = document.querySelector('.close')


console.log(navMenu,navToggle)
navToggle.addEventListener('click',() => {

    navMenu.classList.toggle('active');
    if(navMenu.classList.contains('active')){
        bars.classList.remove('active');
        close.classList.add('active')
    }else{
        close.classList.remove('active');
        bars.classList.add('active')
    }

})