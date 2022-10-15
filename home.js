var menuToggle = document.getElementById('menu-toggle');

var nav = document.getElementById('nav');

menuToggle.onclick = () => {
    if (nav.style.display == "") {
        nav.style.display = "flex";
        menuToggle.classList.add('close-menu');
    } else {
            menuToggle.classList.remove('close-menu');
            nav.style.display = '';

    }
}

window.addEventListener('mouseup', function (event) {
    if (event.target != nav && event.target.parentNode != nav &&         nav.style.display == "flex") {
        menuToggle.classList.remove('close-menu');
        nav.style.display = 'none';
    }
});