const menuToggleButton = document.querySelector('.menu-toggle');
const mainNavMobile = document.querySelector('.main-nav-mobile');

menuToggleButton.addEventListener('click', () => {
    mainNavMobile.classList.toggle('open');
    mainNavMobile.inert = !mainNavMobile.classList.contains('open');
});
