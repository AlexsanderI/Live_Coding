const baseUrl = 'https://62840a40a48bd3c40b6a3c4f.mockapi.io/api/v1/users';

const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('div.form-control input[name = name]');
const passwordInput = document.querySelector('div.form-control input[name = password]');

const formElem = document.querySelector('.login-form');
const submitBtm = document.querySelector('.submit-button');

const avalebForm = () => {
  // debugger;
  if (emailInput.reportValidity() && nameInput.reportValidity() && passwordInput.reportValidity()) {
    submitBtm.disabled = false;
  }
};

function createUser(event) {
  event.preventDefault();
  const user = {
    email: emailInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  };
  const promise = fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  promise
    .then(res => res.json())
    .then(res => {
      console.log(JSON.stringify(res));
      alert(JSON.stringify(res));
      formElem.reset();
    });
}

formElem.addEventListener('input', avalebForm);
formElem.addEventListener('submit', createUser);
