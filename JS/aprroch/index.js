// How to work on tech tasks. Step by step guide

// 1. Learn requirement (what) +++
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// 1.iterate numbers from 2 to num
// 2. check if prime
// 2.1 itrate all numbers frm 2 to index
// 2.2 If index / secondIndex === 0 = not prime
// 3. if prime - console
// 4.

// if i don't no algo
// 9
// 2 ===> 2 / 2 ==== 0 - true
// 3 ===> 3 / 2 ==== 1 3 ==== 3 === 0 - true
// 4 ===> 4 / 2 ====

// input: number
// output: undefined

function getPrimes(num) {
  // put your code here
  let isPrime = tru;
  console.log('index is' + index);
  for (let index = 2; index <= num; index += 1) {
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
