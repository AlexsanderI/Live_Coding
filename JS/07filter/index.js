/* eslint-disable prettier/prettier */
// filter
// input: arr, callback
// output: arr

// callback
// input: el
// output: boolean

// algo
// 1 itarate arr
// 2 apply callback to el
// 3 if true = push to res arr
// 4

const filterArrayElements = (arr, callback) => {
  // eslint-disable-next-line prettier/prettier
  const res = [];

  // console.log();

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }
  return res;
};

// test data
// const arr = ['Alex', 'Tam', 'Andrey'];
// const callback = el => el.includes('a');
// console.log(arr, callback);
// console.log(filterArrayElements(arr, callback);

// test data
const arr = ['Alex', 'Tom', 'Andrey'];
const callback = el => el.length > 3;
// console.log(arr, callback);
console.log(filterArrayElements(arr, callback));

// ------
// function sum(a, b) {
//   console.log(arguments);
// }

// console.log(sum(5, 9, 5, 6, 8));
