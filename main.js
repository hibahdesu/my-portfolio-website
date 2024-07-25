let open = document.querySelector('.bi-list');
let close = document.querySelector('.bi-x-lg');
let menu = document.querySelector('.navbar__menu');

open.addEventListener('click', () => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('hidden');
})

close.addEventListener('click', () => {
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    menu.classList.toggle('hidden');
})