// in obj1, obj2
// out bool

// v1
// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// 1 get keys & value
// 2. check length
// 3.1 compare every keys value with .every method
// 3.2 compare every keys value with .some method = if some equal false
// 4

// V1
function compareObjects2(obj1, obj2) {
  console.log(JSON.stringify(obj1), JSON.stringify(obj2));
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function compareObjects3(obj1, obj2) {
  const firstObj = Object.entries(obj1);
  const secondObj = Object.entries(obj2);
  console.log(Object.fromEntries(firstObj), Object.fromEntries(secondObj));
  return Object.fromEntries(firstObj) === Object.fromEntries(secondObj);
}

// V2
function compareObjects(obj1, obj2) {
  return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
}

// V3
function compareObjects4(obj1, obj2) {
  const arr = Object.entries(obj1).join() === Object.entries(obj2).join();

  return arr;
}

function compareObjects1(obj1, obj2) {
  const array1 = Object.values({ ...obj1 });
  const array2 = Object.values({ ...obj2 });
  // let arrs = [...array2];
  console.log(array1);
  console.log(array2);
  // return array1.equals(array2);
  return array1.some((value, index) => value === array2[index]);
}

// function compareObjects1(obj1, obj2) {
//   let result = Object.values({ obj1, obj2 }).some(element => obj1[element] === obj1[element]);
//   console.log(result);
// console.log(`${obj1[element]}`);
// return result;
// let check = result.every(key => first[key] === second[key]);
// }
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects2(obj1, obj2));
console.log(compareObjects2(obj2, obj3));
console.log(compareObjects2(obj1, obj4));
// ==> false
// ==> false
// ==> true
console.log(compareObjects3(obj1, obj2));
console.log(compareObjects3(obj2, obj3));
console.log(compareObjects3(obj1, obj4));
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj2, obj3));
console.log(compareObjects(obj1, obj4));

console.log(compareObjects4(obj1, obj2));
console.log(compareObjects4(obj2, obj3));
console.log(compareObjects4(obj1, obj4));

console.log(compareObjects1(obj1, obj2));
console.log(compareObjects1(obj2, obj3));
console.log(compareObjects1(obj1, obj4));
