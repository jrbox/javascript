console.log('connecté !');

const icon = document.querySelector('i');
const subscribeBtn = document.querySelector('.btn');

// modification de l'icone sur le clique
icon.addEventListener('click', ()=>{
    icon.classList.toggle('fa-face-meh-blank');
    icon.classList.toggle('fa-face-grin-wink');
    icon.classList.toggle('icon-happy');
});

// prise en compte de l'abonnement lorsqu'on clique sur le bouton "Abonnez-vous"
subscribeBtn.addEventListener('click', ()=>{
    subscribeBtn.classList.toggle('subscribed');
    if(subscribeBtn.innerText === 'Abonnez-vous'){
        subscribeBtn.innerText = 'Abonné';
    }else{
        subscribeBtn.innerText = 'Abonnez-vous';
    }
})