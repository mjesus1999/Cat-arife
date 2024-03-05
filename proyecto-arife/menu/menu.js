// Cards
document.querySelectorAll('.list__button--click').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('arrow');
        let contentHeight = button.nextElementSibling.scrollHeight;
        button.nextElementSibling.style.height = button.nextElementSibling.clientHeight === 0 ? `${contentHeight}px` : 0;
    });
});

// Funcionalidad para seleccionar color en cada tarjeta
document.querySelectorAll('.tarjeta .color').forEach(colorDiv => {
    colorDiv.addEventListener('click', (event) => {
        let color = window.getComputedStyle(colorDiv).getPropertyValue('background-color');
        console.log('Color seleccionado:', color);
        event.stopPropagation();
    });
});

// Header
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }
});
