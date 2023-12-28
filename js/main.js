const cards = document.querySelectorAll('.popular-foods__card')

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cards.forEach(card1 => {
            card1.classList.remove('active-card')
        })
        card.classList.add('active-card')
    })
});