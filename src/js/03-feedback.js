import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback - form - state';
const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
// console.log('savedData:', savedData);

form.addEventListener('input', _throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

savedData ? fillSavedFormData() : '';

function fillSavedFormData() {
  const { email, message } = JSON.parse(savedData);
  form.email.value = email;
  form.message.value = message;
}

function onFormInput(evt) {
  const { email, message } = form.elements;
  localStorage.setItem(
    LOCALSTORAGE_KEY,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
  console.log('onFormInput -> localStorage:', localStorage);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(savedData);
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);

  // let { email, message } = form.elements;
  // email.value = '';
  // message.value = '';

  form.reset();
}
