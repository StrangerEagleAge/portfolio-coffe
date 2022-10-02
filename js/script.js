let menu = document.querySelector('.menu');

document.querySelector('#menu-btn').onclick = () => {
    menu.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    menu.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    menu.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}