const mobile = document.querySelector('.mobile');
const btnMenu = document.querySelector('.btn-menu');
const body = document.body;
const mobileLinks = document.querySelectorAll('.mobile li a');

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('active');
    mobile.classList.toggle('active');
    body.classList.toggle('menu-open');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        btnMenu.classList.remove('active');
        mobile.classList.remove('active');
        body.classList.remove('menu-open');
    });
});