// Animation de la navbar

const btnNav = document.querySelector('.responsive-nav-btn');
const listeNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');


btnNav.addEventListener('click', () => {
      listeNav.classList.toggle('active-nav');

      if(window.location.href.includes('index')){
            if(imgBtn.src.includes('menu')){
                  imgBtn.src = './ressources/croix.svg';
                  imgBtn.style.width = "30px";
                  imgBtn.style.height = "30px";      
            } else {
                  imgBtn.src = './ressources/menu.svg';
                  imgBtn.style.width = "40px";
                  imgBtn.style.height = "40px";  
            }
      }else {
            if(imgBtn.src.includes('menu')){
                  imgBtn.src = '../ressources/croix.svg';
                  imgBtn.style.width = "30px";
                  imgBtn.style.height = "30px";      
            } else {
                  imgBtn.src = '../ressources/menu.svg';
                  imgBtn.style.width = "40px";
                  imgBtn.style.height = "40px";  
            }
      }

})

// Navbar visible au scroll vers le haut

const nav = document.querySelector('nav');
let lastYpos = 0;

window.addEventListener('scroll', () => {
      let currentYPos = document.documentElement.scrollTop;
      // console.log(currentYPos - lastYpos);
      if (document.documentElement.scrollTop > 70 && currentYPos - lastYpos < 0){ //On ajoute la classe .active si on se trouve à plus de 70px du top et qu'on scroll vers le haut.
            nav.classList.add('active');  

      } else {
            nav.classList.remove('active');
      }
      lastYpos = currentYPos;
      listeNav.classList.remove('active-nav');
      imgBtn.src = './ressources/menu.svg';
      imgBtn.style.width = "40px";
      imgBtn.style.height = "40px";
})


// Affichage des cartes cachées lors du clic sur le "+".

const plusBtn = document.querySelector('.afficher-plus img');
const carteCachee = document.querySelectorAll('.carte-cachee');

plusBtn.addEventListener('click', () => {

      // console.log(carteCachee);

      for(i=0; i<carteCachee.length; i++){
            carteCachee[i].classList.toggle('carte-cachee');
            
      }
      minusToPlus(plusBtn);

      
      // Changer le - en + après avoir cliqué une seconde fois dessus.
      function minusToPlus(plusBtn){
            if (plusBtn.src.includes('plus')){
                  plusBtn.src = './ressources/minus.svg';
            }
            else {
                  plusBtn.src='./ressources/plus.svg';
            }
      }

})




