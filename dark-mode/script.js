console.log('connecté !');

const btSwitch = document.querySelector('.btn');
const switchBox = document.querySelector('.switch');
const icon = document.querySelector('i');
const container = document.querySelector('.container');
const title = document.querySelector('h1');

// changement de mode
switchBox.addEventListener('click', ()=>{
    btSwitch.classList.toggle('btn-light-position');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('icon-light-position');
    switchBox.classList.toggle('switch-light');
    container.classList.toggle('container-light');
    if(title.innerText === 'DARK MODE'){
        title.innerText = 'LIGHT MODE';
    }else{
        title.innerText = 'DARK MODE';
    }
});