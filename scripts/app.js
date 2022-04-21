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
let currentYPos = 0;
let lastYpos = 0;

window.addEventListener('scroll', () => {
      currentYPos = document.documentElement.scrollTop;
      // console.log(currentYPos - lastYpos);
      if (document.documentElement.scrollTop > 70 && currentYPos - lastYpos < 0){
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




// function activeOnScroll() {
//       if (document.documentElement.scrollTop > 70) {
//             nav.classList.toggle('active');
//       }
// }
