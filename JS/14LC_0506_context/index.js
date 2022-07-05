'use strict';

// console.log(window);
// // console.log(this);

// const obj = {
//     age: 100;
//     run: function(){
//         const bindeLog = console.log.bind({name:'Oleg'});
//         console.log(this);
//     }
// }

// console.log(obj.run());

// function run() {
//   console.log(this);
//   console.log(`I've am running in ${this.city}`);
// }

// run();

// function run(city) {
//   console.log(`I've am running in ${city}`);
// }

// =====
// 1. what is context? ++++
// 2. when lose context
// 3. how to fix context

// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   intevalId: null,
//   startTimer() {
//     // none
//     // undefine

//     this.intevalId = setInterval(() => {
//       console.log(this);
//       console.log(this.secondsPassed);

//       this.secondsPassed += 1;

//       if (this.secondsPassed === 60) {
//         this.minsPassed += 1;
//         this.secondsPassed = 0;
//       }
//     }, 1000);
//   },
//   stopTimer() {
//     console.log(this);
//     clearInterval(this.intevalId);
//     //
//   },
//   getTime() {
//     if (this.secondsPassed < 10) {
//       return `${this.minsPassed}:0${this.secondsPassed}`;
//     }
//     return `${this.minsPassed}:${this.secondsPassed}`;
//     //
//   },
//   resetTimer() {
//     //
//     this.minsPassed = 0;
//     this.secondsPassed = 0;
//   },
// };

// timer.startTimer();
// timer.stopTimer();

// timer.getTimer();

const member = {
  name: 'Oleg',
  run(age, message) {
    console.log(this);
    console.log(`Hello ${this.name}, I'am ${age} old ${message}`);
  },
};

const f = member.run;
f.call({ name: 'Den' });
