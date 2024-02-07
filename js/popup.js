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