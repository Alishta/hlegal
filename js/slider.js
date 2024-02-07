//slider
const slides = Array.from(document.getElementsByClassName('slider__content'));
const btn = Array.from(document.getElementsByClassName('slide__link'));

console.log(slides, btn);

btn.forEach((item) => {
    item.addEventListener('click', function() {
        event.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('href');
        let currentSlide = document.querySelector(tabId);

        btn.forEach((item) => {
            item.classList.remove('active');
        })

        slides.forEach((item) => {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentSlide.classList.add('active');
    })
})