const slideContainer = document.querySelector('.slide');
const leftBtn = document.querySelector('.leftbtn');
const rightBtn = document.querySelector('.rightbtn');
const dotsContainer = document.querySelector('.dots');

let slideIndex = 0;

leftBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slideContainer.children.length - 1;
    }
    showSlide(slideIndex);
});

rightBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= slideContainer.children.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
});

for (let i = 0; i < slideContainer.children.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
    });
    dotsContainer.appendChild(dot);
}

function showSlide(index) {
    for (let i = 0; i < slideContainer.children.length; i++) {
        if (i === index) {
            slideContainer.children[i].style.display = 'block';
            dotsContainer.children[i].classList.add('active');
        } else {
            slideContainer.children[i].style.display = 'none';
            dotsContainer.children[i].classList.remove('active');
        }
    }
}