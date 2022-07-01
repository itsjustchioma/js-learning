'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // ['keydown', function(){} is called whenever a key is pressed ]
    // console.log('e.key') == shows the key pressed in the console 

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// keyboard events are global events 
// keyup = happens when we lift our hands off the keyboard 
// keypress = fired continuously as we keep our fingers on a certain key 
// keydown = fired as soon as we press down the key   