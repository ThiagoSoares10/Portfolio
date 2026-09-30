const botaoToggle = document.querySelector(".botao-toggle");
const menuLista = document.querySelector(".menu-lista");
const menuLinks = document.querySelectorAll(".menu-link");

// Abre e fecha o menu
botaoToggle.addEventListener("click", () => {

    botaoToggle.classList.toggle("toggle-ativo");
    menuLista.classList.toggle("menu-aberto");

});

// Fecha o menu ao clicar em um link
menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        botaoToggle.classList.remove("toggle-ativo");
        menuLista.classList.remove("menu-aberto");

    });
});

// SCROLL REVEAL
window.revelar = ScrollReveal({ reset: true })

// SCROLL INÍCIO
revelar.reveal('.scroll-inicio',
    {
        duration: 2000,
        distance: '80px',
        delay: 500
    }
)

// SCROLL SOBRE
revelar.reveal('.scroll-sobre',
    {
        duration: 2000,
        distance: '90px',
    }
)

revelar.reveal('.scroll-sobre-card1',
    {
        duration: 2000,
        distance: '80px',
        delay: 500
    }
)

revelar.reveal('.scroll-sobre-card2',
    {
        duration: 2000,
        distance: '80px',
        delay: 800
    }
)

revelar.reveal('.scroll-sobre-card3',
    {
        duration: 2000,
        distance: '80px',
        delay: 1100
    }
)

revelar.reveal('.scroll-sobre-card4',
    {
        duration: 2000,
        distance: '80px',
        delay: 1400
    }
)
// SCROLL HABILIDADE
revelar.reveal('.scroll-habilidade',
    {
        duration: 2000,
        distance: '80px',
        delay: 500
    }
)

revelar.reveal('.scroll-habiidades-card1',
    {
        duration: 2000,
        distance: '80px',
        delay: 800
    }
)

revelar.reveal('.scroll-habiidades-card2',
    {
        duration: 2000,
        distance: '80px',
        delay: 1100
    }
)

revelar.reveal('.scroll-habiidades-card3',
    {
        duration: 2000,
        distance: '80px',
        delay: 1400
    }
)

revelar.reveal('.scroll-habiidades-card4',
    {
        duration: 2000,
        distance: '80px',
        delay: 1700
    }
)

revelar.reveal('.scroll-habiidades-card5',
    {
        duration: 2000,
        distance: '80px',
        delay: 2000
    }
)

// SCROLL PROJETOS
revelar.reveal('.scroll-projetos',
    {
        duration: 2000,
        distance: '80px',
        delay: 500
    }
)

revelar.reveal('.scroll-projetos-card1',
    {
        duration: 2000,
        distance: '80px',
        delay: 400
    }
)

revelar.reveal('.scroll-projetos-card2',
    {
        duration: 2000,
        distance: '80px',
        delay: 600
    }
)

revelar.reveal('.scroll-projetos-card3',
    {
        duration: 2000,
        distance: '80px',
        delay: 800
    }
)

revelar.reveal('.scroll-projetos-card4',
    {
        duration: 2000,
        distance: '80px',
        delay: 1000
    }
)

revelar.reveal('.scroll-projetos-card5',
    {
        duration: 2000,
        distance: '80px',
        delay: 1200
    }
)

revelar.reveal('.scroll-projetos-card6',
    {
        duration: 2000,
        distance: '80px',
        delay: 1400
    }
)

revelar.reveal('.scroll-projetos-card7',
    {
        duration: 2000,
        distance: '80px',
        delay: 1600
    }
)

revelar.reveal('.scroll-projetos-card8',
    {
        duration: 2000,
        distance: '80px',
        delay: 1800
    }
)

// SCROLL CONTATOS
revelar.reveal('.scroll-contatos',
    {
        duration: 2000,
        distance: '80px',
        delay: 500
    }
)

revelar.reveal('.scroll-contatos-card1',
    {
        duration: 2000,
        distance: '80px',
        delay: 800
    }
)

revelar.reveal('.scroll-contatos-card2',
    {
        duration: 2000,
        distance: '80px',
        delay: 1000
    }
)

revelar.reveal('.scroll-contatos-card3',
    {
        duration: 2000,
        distance: '80px',
        delay: 1200
    }
)