// function test(num, str, fun){

// }

function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index++) {
    sum += index;
  }
  resolver(sum);
}

// input: num
// return: undefined
function printResult(res) {
  console.log('result is ' + res);
}

sum(10, 16, printResult);

function alertResult(res) {
  alert('result is ' + res);
}

sum(10, 16, alertResult);

function sentResult(res) {
  //  sent email
}
