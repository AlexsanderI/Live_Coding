// input: obj, string, any
// output: obj

// function addPropertyV1(obj, key, value) {
//   return (obj[key] = value);
// }

function addPropertyV2(obj, key, value) {
  const res = Object.assign(obj, { [key]: value });
  return res;
}

const member = {
  name: 'Alex',
};

function addPropertyV3(obj, key, value) {
  const res = Object.assign({}, obj, { [key]: value });
  return res;
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
console.log({ ...member });

console.log(addPropertyV4(member, 'age', 25));
console.log(addPropertyV4(member, 'age', 0));
console.log(addPropertyV4(member, '', 25));
console.log(member);

// res operator

function sum(number, ...arg) {
  console.log(arg);
}

sum(1, 2, 55, 77);
