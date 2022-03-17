console.log('connecté !');

const saveBtn = document.querySelector('.btn');
const notificationBox = document.querySelector('.container-notifications');

saveBtn.addEventListener('click', ()=>{
    // creation de la notification
    let notification = document.createElement('div');
    notification.innerText = "Votre fichier est bien enregistré";
    notification.classList.add('toast');
    // ajout de la notification 
    notificationBox.appendChild(notification);
    // on supprime la notification apres 2 secondes
    setTimeout(()=>{
        notification.remove();
    }, 2000)
});