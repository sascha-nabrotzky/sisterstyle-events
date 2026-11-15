const menuToggleButton = document.querySelector('.menu-toggle');
const mainNavMobile = document.querySelector('.main-nav-mobile');
const menuIcon = document.querySelector('.menu-toggle svg');

menuToggleButton.addEventListener('click', () => {
    mainNavMobile.classList.toggle('open');
    mainNavMobile.inert = !mainNavMobile.classList.contains('open');
    menuIcon.style.transform = mainNavMobile.classList.contains('open')
        ? 'rotate(-180deg)'
        : 'rotate(0deg)';
});

document.body.addEventListener('click', (event) => {
    if (
        !mainNavMobile.contains(event.target) &&
        !menuToggleButton.contains(event.target)
    ) {
        mainNavMobile.classList.remove('open');
        mainNavMobile.inert = true;
        menuIcon.style.transform = 'rotate(0deg)';
    }
});
