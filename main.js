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

//popup
let popupOverlay = document.getElementById('popup-overlay');
console.log(popupOverlay);
let popup = document.getElementsByClassName('popup')[0];
console.log(popup);
let cross = document.getElementsByClassName('cross')[0];
console.log(cross);
let link = document.getElementsByClassName('popup-link')[0];
console.log(link);

link.addEventListener('click', function(){
    popupOverlay.style.display = 'block';
})

cross.addEventListener('click', function(){
    popupOverlay.style.display = 'none';
})

window.onclick = function(event) {
    if(event.target == popupOverlay) {
    popupOverlay.style.display = 'none';
    }
}

//tabs-button
let tabBtn = document.getElementsByClassName('tabs__btn')[0];
console.log(tabBtn);
let tabs = document.getElementsByClassName('tabs')[0];
console.log(tabs);

tabBtn.addEventListener('click', function(){
    if (tabs.style.display === 'flex') {
        tabs.style.display = 'none';
        tabBtn.style.background = 'url(imgs/scroll.svg)';
    } else {
        tabs.style.display = 'flex';
        tabBtn.style.background = 'background: url(imgs/hover_scroll.svg)';
    }
});

//tabs
function openTab(evt, tabNum) {
    let i, tabContent, tabLink;
    tabContent = document.getElementsByClassName('tab__item');
    console.log(tabContent);
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    
    tabLink = document.getElementsByClassName('tabs__link');
    console.log(tabLink);
    
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(' active', '');
    }
    document.getElementById(tabNum).style.display = 'flex';
    evt.currentTarget.className += ' active';
}

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