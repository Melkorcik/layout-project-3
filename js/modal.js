const btnModalUser = document.getElementById('#my_modal');
const modalUser = document.getElementById('#modal-my');
const btnClose = document.getElementById('#close');

const handlerModalWindow = e => modalUser.style.display = 'flex';
btnModalUser.addEventListener('click', handlerModalWindow);

const handlerCloseModalWindow = e => modalUser.style.display = 'none';
btnClose.addEventListener('click', handlerCloseModalWindow)