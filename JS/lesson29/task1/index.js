// const obj = [{ name: 'lom' }, { name: 'lom1' }, { name: 'lom2' }, { name: 'lom' }];

// const member = {
//   num: 1,
//   run() {
//     console.log(this);
//     console.log(this.num + 1);
//   },
// };

// const obj = {
//   num: 'lom',
// };
// const next = obj.map(persen => {
//   return persen.name;
// });

// console.log(next);

// member.run();

const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    setInterval(function () {
      console.log(this);
      console.log(this.secondsPassed);

      this.secondsPassed += 1;
    }, 1000);
  },
};

timer.startTimer();
