// function getSenseOfLif() {
//   return 42;
// }
// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// function getSquared(num) {
//   return num * num;
// }

// function sum(age) {
//   console.log('I am ' + age + ' old');
// }
// let age = 34;
// sum(age);

// const mult = (firstNum, secondNum) => firstNum * secondNum;

// const square = num => num * num;
// console.log(square(9));

// const getMagicNumber = () => 17;
console.log('helo');

function getPrimes(num) {
  // put your code here
  let isPrime = true;

  for (let index = 2; index <= num; index += 1) {
    console.log('index is' + index);
    for (let secondIndex = 2; secondIndex < index; secondIndex += 1) {
      console.log('secondIndex' + secondIndex);
      if (index % secondIndex === 0) {
        console.log('index is not prime' + index);
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(index);
    }
  }
}

getPrimes(10);
