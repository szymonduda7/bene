const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

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
