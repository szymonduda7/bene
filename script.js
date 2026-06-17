const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Carousel
const carouselTrack = document.querySelector('.carousel-track');
const carouselDots  = document.querySelectorAll('.dot');
let currentSlide = 0;

function goToSlide(index) {
    const total = carouselDots.length;
    currentSlide = (index + total) % total;
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    carouselDots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

document.querySelector('.carousel-prev').addEventListener('click', () => goToSlide(currentSlide - 1));
document.querySelector('.carousel-next').addEventListener('click', () => goToSlide(currentSlide + 1));
carouselDots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

const navToggle = document.getElementById('navToggle');
const navDropdown = document.getElementById('navDropdown');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    navDropdown.classList.toggle('open');
});

document.querySelectorAll('.nav-dropdown a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('menu-open');
        navDropdown.classList.remove('open');
    });
});
