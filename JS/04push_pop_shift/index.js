// 'use strict';
// massage = 'hello';
// console.log(massage);

const numbersList1 = [1, 2, 3, 4, 5];
// const numbersList1 = new Array(1, 2, 3, 4);
// numbersList1.fill();

//  input: none
//  return: number
const res = numbersList1.pop();

console.log(res);

console.log('after pop ' + numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];

//  input: number
//  return: number
const pushRes = numbersList2.push(1, 2, 'some');
console.log(pushRes);

console.log('after push ', numbersList2);

const numbersList3 = [1, 2, 3, 4, 5];
//  input: none
//  return: number
console.log(numbersList3.shift());

console.log('after shift ', numbersList3);
