//put your code here
// 1 make function .add day or month....
// 2 make function .add date 'if' this is 'day' or 'month'....
// 3 put in chaine function

export const shmoment = (data) => {
  let result = new Date(data);

  const calculator = {
    add(text, value) {
      if (text === 'years')
        new Date(result.setFullYear(result.getFullYear() + value));
      if (text === 'months')
        new Date(result.setMonth(result.getMonth() + value));
      if (text === 'days') new Date(result.setDate(result.getDate() + value));
      if (text === 'hours')
        new Date(result.setHours(result.getHours() + value));
      if (text === 'minutes')
        new Date(result.setMinutes(result.getMinutes() + value));
      if (text === 'seconds')
        new Date(result.setSeconds(result.getSeconds() + value));
      if (text === 'milliseconds')
        new Date(result.setMilliseconds(result.getMilliseconds() + value));
      return calculator;
    },

    subtract(text, value) {
      if (text === 'years')
        new Date(result.setFullYear(result.getFullYear() - value));
      if (text === 'months')
        new Date(result.setMonth(result.getMonth() - value));
      if (text === 'days') new Date(result.setDate(result.getDate() - value));
      if (text === 'hours')
        new Date(result.setHours(result.getHours() - value));
      if (text === 'minutes')
        new Date(result.setMinutes(result.getMinutes() - value));
      if (text === 'seconds')
        new Date(result.setSeconds(result.getSeconds() - value));
      if (text === 'milliseconds')
        new Date(result.setMilliseconds(result.getMilliseconds() - value));
      return calculator;
    },

    result() {
      return result;
    },
  };
  return calculator;
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();

console.log(result);
