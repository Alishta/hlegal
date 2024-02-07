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