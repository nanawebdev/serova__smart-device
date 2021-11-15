'use strict';
(function () {
  var bodyWithoutJS = document.querySelector('.no-js');
  bodyWithoutJS.classList.remove('no-js');

  var pages = document.querySelector('.js-pages');
  var openPages = document.querySelector('.js-open-pages');
  var office = document.querySelector('.js-office');
  var openOffice = document.querySelector('.js-open-office');

  var popup = document.querySelector('.popup-wrapper');
  var openPopupButton = document.querySelector('.js-open-popup');
  var closePopupButton = document.querySelector('.js-close-popup');
  var popupForm = document.querySelector('.js-popup-form');
  var overlay = document.querySelector('.overlay');

  var questionsForm = document.querySelector('.js-questions-form');

  var phoneInput = document.querySelector('.js-phone-input');
  var nameInput = document.querySelector('.js-name-input');
  var messageInput = document.querySelector('.js-message-input');
  var checkboxInput = document.querySelector('.js-checkbox-input');

  var phoneInputPopup = document.querySelector('.js-phone-input-popup');
  var nameInputPopup = document.querySelector('.js-name-input-popup');
  var messageInputPopup = document.querySelector('.js-message-input-popup');
  var checkboxInputPopup = document.querySelector('.js-checkbox-input-popup');

  var popupResult = document.querySelector('.js-popup-result');
  var questionsResult = document.querySelector('.js-questions-result');

  var central = document.querySelector('.central');
  var links = central.querySelectorAll('a');
  var inputs = central.querySelectorAll('input');
  var buttons = central.querySelectorAll('button');
  var textareas = central.querySelectorAll('textarea');
  var labels = central.querySelectorAll('label');

  function setBlur(elements) {
    elements.forEach(function (v) {
      v.setAttribute('tabindex', '-1');
    });
  }

  function removeBlur(elements) {
    elements.forEach(function (v) {
      v.removeAttribute('tabindex');
    });
  }

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
    nameInputPopup.focus();
    setBlur(links);
    setBlur(inputs);
    setBlur(buttons);
    setBlur(textareas);
    setBlur(labels);
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
    popupResult.style.display = 'none';
    document.body.style.overflow = 'scroll';
    removeBlur(links);
    removeBlur(inputs);
    removeBlur(buttons);
    removeBlur(textareas);
    removeBlur(labels);
  }

  function validation(phone, name, isChecked) {
    var valid = true;

    if (name.trim() === 0 || phone.length < 17 || isChecked === false) {
      valid = false;
    }

    return valid;
  }

  function saveLocalStorageData(data) {
    localStorage.setItem('phone', data.userPhone);
    localStorage.setItem('name', data.userName);
    localStorage.setItem('message', data.userMessage);
  }

  function onSubmitPopupForm(e) {
    e.preventDefault();
    var userPhone = phoneInputPopup.value;
    var userName = nameInputPopup.value;
    var userMessage = messageInputPopup.value;
    var isChecked = checkboxInputPopup.checked;

    if (validation(userPhone, userName, isChecked)) {
      popupResult.style.display = 'flex';

      saveLocalStorageData({
        userPhone: userPhone,
        userName: userName,
        userMessage: userMessage
      });
    }
  }

  function onSubmitQuestionsForm(e) {
    e.preventDefault();

    var userPhone = phoneInput.value;
    var userName = nameInput.value;
    var userMessage = messageInput.value;
    var isChecked = checkboxInput.checked;

    if (validation(userPhone, userName, isChecked)) {
      questionsResult.style.display = 'flex';

      saveLocalStorageData({
        userPhone: userPhone,
        userName: userName,
        userMessage: userMessage
      });
    }
  }

  function hideQuestionsResult() {
    questionsResult.style.display = 'none';
  }

  if (popupForm) {
    popupForm.addEventListener('submit', onSubmitPopupForm);
  }

  if (questionsForm) {
    questionsForm.addEventListener('submit', onSubmitQuestionsForm);
  }

  if (openPopupButton) {
    openPopupButton.addEventListener('click', openPopup);
  }

  if (closePopupButton) {
    closePopupButton.addEventListener('click', closePopup);
  }

  if (openPages) {
    openPages.addEventListener('click', menuTogglerPages);

  }

  if (openOffice) {
    openOffice.addEventListener('click', menuTogglerOffice);
  }

  if (overlay) {
    overlay.addEventListener('click', closePopup);
  }

  if (popupResult) {
    popupResult.addEventListener('click', closePopup);
  }

  if (questionsResult) {
    questionsResult.addEventListener('click', hideQuestionsResult);
  }

  window.jQuery('[type=tel]').mask('+7 (000) 000-0000');
})();
