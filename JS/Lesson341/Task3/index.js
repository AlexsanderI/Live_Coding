const loginForm = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');
const emailField = document.querySelector('#email');
const nameField = document.querySelector('#name');
const passField = document.querySelector('#password');
const errorField = document.querySelector('.error-text');

const baseUrl = 'https://614ffa90a706cd00179b734a.mockapi.io/users';

const getUserData = () => fetch(baseUrl).then(response => response.json());

const createUserData = userData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

const onSendUserData = event => {
  event.preventDefault();

  const userData = {
    email: emailField.value,
    name: nameField.value,
    password: passField.value,
  };

  createUserData(userData)
    .then(data => data.json())
    .then(data => {
      alert(JSON.stringify(data));
      loginForm.reset();
    })
    .catch(() => {
      errorField.textContent = 'Failed to create user';
      return errorField;
    });
};

const checkValidForm = () =>
  loginForm.reportValidity()
    ? submitButton.removeAttribute('disabled', 'disabled')
    : submitButton.setAttribute('disabled', 'disabled');

const cleanError = () => {
  errorField.innerHTML = '';
};

submitButton.addEventListener('click', onSendUserData);
loginForm.addEventListener('input', checkValidForm);
loginForm.addEventListener('input', cleanError);
