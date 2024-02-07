//lang
const lang = document.getElementsByClassName('lang__item');
console.log(lang);

[...lang].forEach((item) => {
    item.addEventListener('click', function() {
        let currentLang = item;

        [...lang].forEach((item) => {
            item.classList.remove('lang__item-active');
        });

        currentLang.classList.add('lang__item-active');
    })
})

//burger
const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.getElementsByClassName('burger__menu')[0];
const burgerCross = document.getElementById('burger__cross');
console.log(burgerBtn, burgerMenu);

burgerBtn.addEventListener('click', function() {
    burgerMenu.style.display = 'flex';
    burgerBtn.style.display = 'none';
    burgerCross.style.display = 'block';
})

burgerCross.addEventListener('click', function() {
    burgerMenu.style.display = 'none';
    burgerBtn.style.display = 'block';
    burgerCross.style.display = 'none';
})