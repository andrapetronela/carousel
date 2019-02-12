const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dots span');
console.log(cards);
console.log(dots);


const previousSlide = document.getElementById('left-arrow');
const nextSlide = document.getElementById('right-arrow');

let index = 1;

const showFirstSlide = (index) => {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
    }
    cards[index-1].style.opacity = '1';
    dots[index-1].classList.add('span-active');
}

showFirstSlide(index);

const showNextSlide = () => {
    dots[index-1].classList.remove('span-active');
    index++;
    if (index > cards.length) {
        index = 1;
    }
    showFirstSlide(index);
}

const showPreviousSlide = () => {
    dots[index-1].classList.remove('span-active');
    index--;
    if (index < 1) {
        index = cards.length;
    }
    showFirstSlide(index);
}

nextSlide.addEventListener('click', showNextSlide);
previousSlide.addEventListener('click', showPreviousSlide);