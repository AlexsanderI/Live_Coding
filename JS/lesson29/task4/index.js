const add3 = (value) => value + 3;
const mult6 = (value) => value * 2;
const div2 = (value) => value / 2;

const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverything = compose(add3, mult6, div2);

console.log(doEverything(5));
