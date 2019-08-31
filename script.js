window.onload = function () {
    let mb = document.querySelector('.nav__btn');
    mb.addEventListener('click', showNav);
}

function showNav() {
    document.querySelector('.nav__links').classList.toggle('show__links')
    console.log('clicked')
}