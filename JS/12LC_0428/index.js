// hoisting var example 1
// var massage
// console.log(message);
// var message = 'Hoisting is here!';

console.log(message);
var message = 'Hoisting is here!';

// hoisting var example 2
console.log(message);
// let message = 'Hoisting is here!';

// hoisting var example 3
// var a ;
// a = 55;
// console.log(a);

// if (a) {
//  a = 1;

//   console.log(a);
// }

// console.log(a);

var a = 55;
console.log(a);

if (a) {
  var a = 1;

  console.log(a);
}

console.log(a);

// var a
// a = 77;
// console.log(a);

// var a
// a = 2;
//  
// var a
// a = 77;

// console.log(a);

var a = 77;
console.log(a);

function print() {
  var a = 2;
  console.log(a);
}
print();

console.log(a);

// hoisting var example 4
run();

function run() {
  console.log('RUN');
}

// console.log(typeof stop);
// console.log(stop);
// stop();


const stop = function () {
  console.log('STOP');
};
stop();