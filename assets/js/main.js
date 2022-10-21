// creo l'array delle immagini

const slidesArray = [
            {
                image: './assets/img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: './assets/img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: './assets/img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: './assets/img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: './assets/img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
]


//seleziono l'elemento nel quale inserirà le immagini

const slidesEl = document.querySelector('.slides');

/* slidesEl.insertAdjacentHTML('beforeend', slidesArray[2]) */

// creo una variabile per tenere sotto controllo quale immagine è attiva

let activeImage = 0

for (let i = 0; i < slidesArray.length; i++) {
      const slideUrl = slidesArray[i];
      const slideHtml = `<img class="${i === activeImage ? 'active' : ''}" src="${slideUrl.image}" alt="">`;
      //generateMarkup(slideUrl)
      slidesEl.insertAdjacentHTML('beforeend', slideHtml)
      generateTitle(i, slideUrl);
      generateText(i, slideUrl);
      
}

function generateTitle(index, element) {
      const titleEl = document.querySelector('.title');
      const titleMarkup = `<h2 class="${index === activeImage ? 'active' : ''}">${element.title}</h2>`;
      titleEl.insertAdjacentHTML('beforeend', titleMarkup);
}

function generateText(index, element) {
      const textEl = document.querySelector('.text');
      const textMarkup = `<h5 class="${index === activeImage ? 'active' : ''}">${element.text}</h5>`;
      textEl.insertAdjacentHTML('beforeend', textMarkup);
}


// seleziono i button che userò come next e prev
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// metto in ascolto il button al click
nextButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const currentImage = slidesImg[activeImage];
      // scorro il titolo
      const slidesTitle = document.querySelectorAll('.title > h2');
      const currentTitle = slidesTitle[activeImage];
      // scorro il testo
      const slidesText = document.querySelectorAll('.text > h5');
      const currentText = slidesText[activeImage];

      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      currentTitle.classList.remove('active');
      currentText.classList.remove('active');
      // faccio un incremento della mia immagine per selezionare la successiva
      activeImage++;

      // quando sono all'ultima immagine devo tornare alla prima
      if (activeImage === 5){
            activeImage = 0
            console.log(activeImage)
      }
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      const nextTitle = slidesTitle[activeImage];
      const nextText = slidesText[activeImage];
      nextImage.classList.add('active')
      nextTitle.classList.add('active')
      nextText.classList.add('active')
      
      
})

prevButton.addEventListener('click', function () {
      const slidesImg = document.querySelectorAll('.slides > img');
      const currentImage = slidesImg[activeImage];
      // tolgo la classe active per non mostrarla più
      currentImage.classList.remove('active');
      // faccio un decremento della mia immagine per selezionare la successiva
      activeImage--;
      
      // quando sono alla prima immagine devo tornare all'ultima
      if (activeImage === -1){
            activeImage = 4
            console.log(activeImage)
      }
      // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
      const nextImage = slidesImg[activeImage];
      nextImage.classList.add('active')
     
})
