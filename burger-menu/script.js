console.log('connecté !');

const icon = document.querySelector('i');
const modal = document.querySelector('.modal');

icon.addEventListener('click', () => {
    modal.classList.toggle('modal-moove');
    icon.classList.toggle('fa-xmark');
});