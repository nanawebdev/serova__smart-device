'use strict';

var bodyWithoutJS = document.querySelector('.no-js');
bodyWithoutJS.classList.remove('no-js');

var pages = document.querySelector('.js-pages');
var office = document.querySelector('.js-office');
var popup = document.querySelector('.popup-wrapper');
var phoneInput = document.querySelector('.js-phone-input');
var openPopupButton = document.querySelector('.js-open-popup');
var closePopupButton = document.querySelector('.js-close-popup');
var overlay = document.querySelector('.overlay');
var nameInput = document.querySelector('.js-name-input');
var form = document.querySelector('form');

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
  overlay.style.display = 'block';
  var previousBodyWidth = document.body.clientWidth;
  document.body.style.overflow = 'hidden';
  var scrollWidth = document.body.clientWidth - previousBodyWidth;
  document.body.style.marginRight = document.body.clientWidth + scrollWidth;
}

function closePopup() {
  popup.classList.remove('js-popup--open');
  overlay.style.display = 'none';
  document.body.style.overflow = 'scroll';
}

function validation() {

}

function setMask() {
  phoneInput.setAttribute('value', '+7');
}

function onSubmitForm(e) {
  e.preventDefault();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
pages.addEventListener('click', menuTogglerPages);
office.addEventListener('click', menuTogglerOffice);
phoneInput.addEventListener('change', validation);
phoneInput.addEventListener('click', setMask);
overlay.addEventListener('click', closePopup);
form.addEventListener('submit', onSubmitForm);

