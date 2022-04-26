const refs = {
    btnSet: document.querySelector('.portfolio-chois'),
    cards: document.querySelectorAll('.portfolio-card'),

} 

console.log(refs.cards[1].dataset.card);
refs.btnSet.addEventListener('click', onClick);


function onClick(e) {
    switch (e.target.dataset.btn) {
        case 'all':
            refs.cards.forEach(element => {
                element.classList.remove('is-hidden');
            });
            break;

        case 'sites':
            refs.cards.forEach(element => {
                element.classList.remove('is-hidden');
                if (element.dataset.card !== 'sites') {
                    element.classList.add('is-hidden');
                }
            });
            break;

        case 'app':
            refs.cards.forEach(element => {
                element.classList.remove('is-hidden');
                if (element.dataset.card !== 'app') {
                    element.classList.add('is-hidden');
                }
            });
            break;

        case 'design':
             refs.cards.forEach(element => {
                element.classList.remove('is-hidden');
                if (element.dataset.card !== 'design') {
                    element.classList.add('is-hidden');
                }
            });
            break;
        
        case 'marketing':
            refs.cards.forEach(element => {
                element.classList.remove('is-hidden');
                if (element.dataset.card !== 'marketing') {
                    element.classList.add('is-hidden');
                }
            });
            break;
    }
}