// algo
// 1 itarate keysList array ***
// add key for value to the obj

// V1
// function buildObject(keysList, valuesList) {
//   const result = {};
//   for (let i = 0; i < keysList.length; i += 1) {
//     result[keysList[i]] = valuesList[i];
//   }
//   return result;
// }

// V2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     console.log(`acc: ${acc}; key: ${key}; index: ${index}`);

//     return acc;
//   }, {});
// }

// V3
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

// V4
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

// examples
const car = ['name', 'wheel', 'engine'];
const parts = ['BMW', 'allroad', '34'];
const result = buildObject(car, parts); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
