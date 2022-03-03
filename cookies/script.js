console.log('connecté !');

const cookies = document.querySelector('.cookies');
const btnSuccess = document.querySelector('.btn-success');

// lorsque l'utilisateur accepte les cookies, on fait disparaitre la banniere
btnSuccess.addEventListener('click', () => {
    cookies.style.opacity = "0";
});