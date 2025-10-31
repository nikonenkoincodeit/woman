const mobMenuRef = document.querySelector('.js-mob-menu');
const mobMenuCloseRef = document.querySelector('.js-mob-menu-close');
const toggleMobMenuRef = document.querySelector('.js-toggle-mob-menu');

toggleMobMenuRef.addEventListener('click', () => {
    mobMenuRef.classList.add('open')
})

mobMenuCloseRef.addEventListener('click', () => {
    mobMenuRef.classList.remove('open')
})