/*
// seleziona tutti gli elementi con la classe CSS .move
const elements = document.querySelectorAll('.move');

// crea un nuovo oggetto IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.boundingClientRect.top < window.innerHeight) {
      // rimuovi la classe CSS per far scattare l'animazione flip-2-ver-left-fwd
      entry.target.classList.remove('move');
      entry.target.classList.add('flip-2-ver-left-fwd');

      // rimuovi la classe CSS "card-front" dopo l'animazione flip-2-ver-left-fwd
      entry.target.addEventListener('animationend', () => {
        entry.target.querySelector('.card-front').classList.add('nascosto');
      }, {once: true});

      // ferma l'osservazione dell'entry per evitare ripetizioni
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0
});

// per ogni elemento con la classe CSS .move
elements.forEach(element => {
  // aggiungi la classe CSS per nascondere l'elemento
  element.classList.add('move');
  // avvia l'osservazione dell'entry per far scattare l'animazione flip-2-ver-left-fwd quando diventa visibile sulla pagina
  observer.observe(element);
});
*/

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const button = card.querySelector('.btn-card-front');
  const content = card.querySelector('.card-front');

  button.addEventListener('click', () => {
     cards.forEach(otherCard => {
      if (otherCard !== card) {
        const otherContent = otherCard.querySelector('.card-front');
        otherContent.classList.remove('visible');
      }
    }); 

    content.classList.toggle('visible');
  });
});

