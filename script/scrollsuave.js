const scrollSuave = document.querySelectorAll('.js-nav');

function scrollToSection(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const initPosition = section.offsetTop;

    window.scrollTo({
        top: initPosition - 80,
        behavior: "smooth"
    })
}

scrollSuave.forEach(link => {
    link.addEventListener('click', scrollToSection)
})