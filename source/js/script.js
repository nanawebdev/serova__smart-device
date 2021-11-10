'use strict';

var bodyWithoutJS = document.querySelector('.no-js');
bodyWithoutJS.classList.remove('no-js');

var pages = document.querySelector('.js-pages');
var office = document.querySelector('.js-office');
var popup = document.querySelector('.popup-wrapper');
var phoneInput = document.querySelector('.js-phone-input');
var openPopupButton = document.querySelector('.js-open-popup');
var closePopupButton = document.querySelector('.js-close-popup');
var nameInput = document.querySelector('.js-name-input');
var form = document.querySelector('.js-popup-form');
var overlay = document.querySelector('.overlay');
var messageInput = document.querySelector('.js-message-input');

function menuTogglerOffice() {
  office.classList.toggle('js-menu-open');
  pages.classList.remove('js-menu-open');
}

function menuTogglerPages() {
  pages.classList.toggle('js-menu-open');
  office.classList.remove('js-menu-open');
}

function openPopup() {
  popup.classList.add('js-popup--open');
  nameInput.focus();
  var previousBodyWidth = document.body.clientWidth;
  document.body.style.overflow = 'hidden';
  var scrollWidth = document.body.clientWidth - previousBodyWidth;
  document.body.style.marginRight = document.body.clientWidth + scrollWidth;

  document.onkeydown = function(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  };
}

function closePopup() {
  popup.classList.remove('js-popup--open');
  document.body.style.overflow = 'scroll';
}

// function validation(value) {

// }

// function setMask(value) {

//   function createMask(value) {
//     var matrix = '+7 (___)_______';
//     var i = 0;

//     // возьми все не цифры и замени пустым местом. вернется 7
//     var def = matrix.replace(/\D/g, '');
//     var val = value.replace(/\D/g, '');

//     if (def.length >= val.length) {
//       val = def;
//     }

//     value = matrix.replace(/./g, function (a) {
//       if (/[_\d]/.test(a) && i < val.length) {
//         val.charAt(i++);

//         if (i >= val.length) {
//           return '';
//         }
//         return a;
//       }
//       // return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
//     });
//   }

// }

function onSubmitForm(e) {
  e.preventDefault();
  var userPhone = phoneInput.value;
  var userName = nameInput.value;
  var userMessage = messageInput.value;
  // validation(userPhone);

  localStorage.setItem('phone', userPhone);
  localStorage.setItem('name', userName);
  localStorage.setItem('message', userMessage);

}

form.addEventListener('submit', onSubmitForm);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
pages.addEventListener('click', menuTogglerPages);
office.addEventListener('click', menuTogglerOffice);
// phoneInput.addEventListener('change', setMask(phoneInput.target.value));
// phoneInput.addEventListener('click', setMask);
overlay.addEventListener('click', closePopup);


