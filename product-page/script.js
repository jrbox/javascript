console.log('connecté !');

const fullImage = document.querySelector('.product-images-full-card-image');
const smallImageList = document.querySelectorAll('.product-images-small-card-image');
const btnCart = document.querySelector('.btn-cart'); 
const cartContainer = document.querySelector('.cart-container');
let cartCounter = 0; 


// On définit l'image principale au survole de la souris 
smallImageList.forEach((smallImage) => {
    smallImage.addEventListener('mouseover', () =>{
        fullImage.setAttribute('src', smallImage.getAttribute('src'));
    })
});

btnCart.addEventListener('click', function(){
    cartCounter += 1; 
    if( cartCounter < 2) {
        cartContainer.innerText = "Vous avez" + " " + cartCounter + " " + "produit dans votre panier"; 
    }else{
        cartContainer.innerText = "Vous avez" + " " + cartCounter + " " + "produits dans votre panier"; 
    }
}); 