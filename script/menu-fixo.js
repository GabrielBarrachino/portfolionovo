const menuFixo = document.getElementById('header');

function fixedMenu(){
    if(window.pageYOffset > 80) {
        menuFixo.classList.add('fixed-menu');
    } else{
        menuFixo.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);