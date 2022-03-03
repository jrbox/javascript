console.log('connecté !');

const title = document.getElementById('titre');
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');

let counter = 0;

console.log(title);
title.style.color = 'green';
title.innerText = counter;

// detection du clique sur le cercle rouge
btnRed.addEventListener('click', function () {
    console.log('cercle rouge cliqué');
    add();
});

// detection du clique sur le cercle bleue
btnBlue.addEventListener('click', function () {
    console.log('cercle bleu cliqué');
    add();
});

// centraliser le code avec une fonction d'ajout
function add() {
    counter++;
    console.log(counter, 'nouveau compteur');
    title.innerText = counter;
}

// Les cercles seront supprimes au bout de 10 secondes
setTimeout(function () {
    btnBlue.remove();
    btnRed.remove();
    console.log("temps écoulé");
}, 10000);
