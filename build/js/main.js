'use strict';
(function () {
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

    document.onkeydown = function (e) {
      if (e.key === 'Escape') {
        closePopup();
      }
    };
  }

  function closePopup() {
    popup.classList.remove('js-popup--open');
    document.body.style.overflow = 'scroll';
  }

  function onSubmitForm(e) {
    e.preventDefault();
    var userPhone = phoneInput.value;
    var userName = nameInput.value;
    var userMessage = messageInput.value;

    localStorage.setItem('phone', userPhone);
    localStorage.setItem('name', userName);
    localStorage.setItem('message', userMessage);

  }

  if (form) {
    form.addEventListener('submit', onSubmitForm);
  }

  if (openPopupButton) {
    openPopupButton.addEventListener('click', openPopup);
  }

  if (closePopupButton) {
    closePopupButton.addEventListener('click', closePopup);
  }

  if (pages) {
    pages.addEventListener('click', menuTogglerPages);

  }

  if (office) {
    office.addEventListener('click', menuTogglerOffice);
  }

  if (overlay) {
    overlay.addEventListener('click', closePopup);
  }

  window.jQuery('[type=tel]').mask('+7 (000) 000-0000');
})();
