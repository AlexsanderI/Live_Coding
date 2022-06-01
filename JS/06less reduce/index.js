console.log('hello');
const anotherNumberList = [5, 8, 8, 10, -4, 220];
//input: function
//output: arr

//input: num, index (optional), arr (optional)
//output: boolean

// const filterRes = anotherNumberList.filter(filterCallback);
// console.log(filterRes);

// option
// function filterCallback(num) {
//   console.log('filterCallback is called ' + num);
// }

// option 2
// const filterRes = anotherNumberList.filter( function(num){
//  return num > 5;
// });
// console.log(filterRes);

// option3
const filterRes = anotherNumberList.filter(num => num > 5);
console.log(filterRes);

// -------map

//input: function, obj
//output: arr

//input: element
//output: modified

const arr = [5, 0, 8, 10, -4, 50, 220];

// const mapRes = numbersList.map(el => el * el);
// const mapRes = numbersList.map(el => {
//   if (el < 0) {
//     return 'number';
//   }
//   return el * el;
// });

// console.log(mapRes);

// find
// input: fun
// output: el

// input: fun
// output: el

//  option 1
// const findRes = numbersList.find(el => {
//   if (el % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(findRes);

//  option 2
// const findRes = numbersList.find(el => el % 2 === 1);

// console.log(findRes);

// some
// input: func
// outpute: boolean

// --- forEach
// input: func
// outpute: undefined

// callback
// input: el
// outpute: undefined

const forEach = anotherNumberList.forEach(el => {
  if (el < 0) {
    console.log(el);
    return el;
  }
});

console.log(forEach);
