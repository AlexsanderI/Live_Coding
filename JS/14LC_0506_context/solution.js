// const obj = {
//   number: 17,
//   getNumber: function () {
//     console.log(this.number);
//     console.log(obj.number);
//   },
// };

// obj.getNumber();

// const func = obj.getNumber();
// const func = obj.getNumber.bind(obj);
// func();
// console.log(func());

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intevalId: null,
  startTimer() {
    // none
    // undefine

    setInterval(() => {
      console.log(this);
      console.log(this.secondsPassed);

      this.secondsPassed += 1;
    }, 1000);
  },
};

// timer.startTimer();

const a = 5;
const b = 7;

function myFun(firstNum, secondNum, callback) {
  const sum = firstNum + secondNum;
  // return sum;
  callback(sum, ' $');
}
function otherFun(params, text) {
  const result = params + text;
}
// const result = myFun(10, 2, otherFun);
// console.log(result);

console.log(myFun(3, 2, otherFun));
