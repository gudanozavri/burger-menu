
const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});


const registerButton = document.getElementById('registerButton');
const registerModal = document.getElementById('registerModal');
const closeBtn = document.getElementById('closeBtn');

registerButton.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    registerModal.style.display = 'none';
});
ს
window.addEventListener('click', (event) => {
    if (event.target === registerModel){
        registerModel.style.display = 'none';
    }
});
