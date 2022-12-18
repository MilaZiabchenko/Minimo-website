const form = document.querySelector('#form');

const createFlashMessage = (messageText, className) =>
  setTimeout(() => {
    const flashMessage = document.createElement('p');

    flashMessage.textContent = messageText;
    flashMessage.setAttribute('id', 'flash-message');
    flashMessage.classList.add('flash', className);

    document
      .querySelector('.flash-message-container')
      .insertAdjacentElement('beforeend', flashMessage);
  }, 500);

const removeFlashMessage = () =>
  setTimeout(() => document.querySelector('#flash-message').remove(), 5000);

const arrEmails = [];

const validateEmail = e => {
  e.preventDefault();

  const email = document.forms['contact']['email'].value;

  document.querySelector('form > input').value = '';

  if (email.trim().length === 0) {
    createFlashMessage('email address is required!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (!email.includes('@')) {
    createFlashMessage('email must include an "@"!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.endsWith('@') || email.endsWith('.') || !email.includes('.')) {
    createFlashMessage('email is incomplete!', 'invalid');
    removeFlashMessage();

    return;
  }

  if (email.length < 8) {
    createFlashMessage('email must be at least 8 chars!', 'invalid');
    removeFlashMessage();

    return;
  }

  createFlashMessage('your email is accepted :)', 'valid');
  removeFlashMessage();

  arrEmails.push(email);

  localStorage.setItem('emails', JSON.stringify(arrEmails));

  const existingEmails = JSON.parse(localStorage.getItem('emails'));

  return existingEmails || arrEmails;
};

form.addEventListener('submit', validateEmail);
