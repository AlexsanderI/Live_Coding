const formElem = document.querySelector('.login-form');
const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';
console.log('');

function createUserHandler() {
  event.preventDefault();
  console.log('test');

  const user = {
    email: 'test@email.com',
    name: 'Oleksandr',
    password: '123',
  };

  console.log(JSON.stringify(user));

  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  // input: callback, callback
  // out: promise

  // callback
  // inputa: result of prev promise
  // out: promise any - will be wrapped in the promise
  promise
    .then(response => {
      console.log('response is here');
      // input none
      // out: promise
      return response;
    })
    .then(body => {
      console.log('body id read');

      console.log(body);
    });
}

formElem.addEventListener('submit', createUserHandler);
console.log('listener added');
