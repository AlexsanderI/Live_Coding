// VLAD - BAD
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     }
//     if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }

// IRA - Norm
// const withdraw = (clients, balances, client, amount) => {
//   const balance = balances[clients.indexOf(client)];
//   return balance > amount ? balance - amount : -1;
// };

// VITALII - NORM
// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);

//   if (amount > balances[indexClient]) {
//     return -1;
//   }

//   balances[indexClient] -= amount;
//   return balances[indexClient];
// };

// test data
// const user = ['Ann', 'John', 'User'];
// const balances = [1400, 87, -6];
// console.log(withdraw(user, balances, 'John', 50));
// console.log(balances);

// OLEG - BAD
// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i < clients.length; i++) {
//     if (clients[i] === client && balances[i] >= amount) {
//       return (balances[i] -= amount);
//     } else if (clients[i] === client && balances[i] < amount) {
//       return -1;
//     }
//   }
// }


// YAROSLAV - NORM
// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);
// //    condition ? value1 : value2
//   return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
// };

// LIZA - NORM
// let result;
// function withdraw(clients, balances, client, amount) {
//   let index = clients.indexOf(client);

//   if (balances[index] >= amount) {
//     return (balances[index] -= amount);
//   }

//   return -1;
// }

// OLEKSANDR - BED
// const withdraw = (clients, balances, client, amount) => {
//   let result = 0;
//   clients.forEach(function (name, index) {
//     if (name.includes(client) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (name.includes(client) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };