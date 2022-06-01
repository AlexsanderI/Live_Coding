const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// собирает данные в одно целое: cамма, во всех случах кроме map filter

// reduce
// input callback, int acc (option)
// output num

//
// input arr() el, index, acc
// output acc

// transactions.reduce((acc, element) => {
//   console.log('acc = ' + acc);
//   console.log(element);

//   acc += 95;

//   //   return acc;
// }, 0);

transactions.reduce((acc, element) => {
  console.log('acc = ' + acc);
  acc += element;
  return acc;
}, 0);
