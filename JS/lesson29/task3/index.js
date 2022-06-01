const mult = (a) => (b) => a * b;

const twice = mult(4);
console.log(twice(9));
const triple = mult(3);
console.log(triple(9));
const result = twice(5);
console.log(result);
