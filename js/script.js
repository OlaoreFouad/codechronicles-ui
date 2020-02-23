const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

const modal = document.querySelector('#modal');

menu.addEventListener('click', (e) => {
    modal.style.display = 'block';
})

close.addEventListener('click', (e) => {
    modal.style.display = 'none';
})

var last = 0;
var next;

window.onscroll = () => {
    last = window.pageYOffset;
}
