const menu = document.querySelector('.menu');
const openSearch = document.querySelector('#search');
const openSearchBig = document.querySelector('#search-icon');
const close = document.querySelector('#menu-close');

const modal = document.querySelector('#modal');
const searchModal = document.querySelector('#search-modal');

const searchClose = document.querySelector('#search-close');

menu.addEventListener('click', _ => {
    modal.style.display = 'block';
})

close.addEventListener('click', _ => modal.style.display = 'none');

searchClose.addEventListener('click', _ => searchModal.style.display = 'none');
openSearch.addEventListener('click', _ => searchModal.style.display = 'block');
openSearchBig.addEventListener('click', _ => searchModal.style.display = 'block');

// var last = 0;
// var next;

// window.onscroll = () => {
//     last = window.pageYOffset;
// }
