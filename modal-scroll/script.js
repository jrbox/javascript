console.log('connecté !');

const modal = document.querySelector('.modal-container');
const code = document.querySelector('.code');
const btn = document.querySelector('.btn-success');
const closeIcon = document.querySelector('i');

/** On affiche le promo sur le scroll utilisateur */
window.addEventListener('scroll', displayModal);

/**
 * Afficher la promotion.
 */
function displayModal(){
    let htop = document.documentElement.scrollTop;
    console.log(htop, "nombre de px depuis le haut de la page");
    if(htop>400){
        modal.style.display = 'flex';
    }
}

/**
 * Afficher le code promo.
 */
btn.addEventListener('click', ()=>{
    code.style.display = 'block';
    btn.style.display = 'none'
});

/**
 * Supprimer l'affichage de la promo.
 */
closeIcon.addEventListener('click', ()=>{
    modal.style.display = 'none';
    window.removeEventListener('scroll', displayModal);
})