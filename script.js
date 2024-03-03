const hamMenu = document.querySelector('.logo_burger_btn');
const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})