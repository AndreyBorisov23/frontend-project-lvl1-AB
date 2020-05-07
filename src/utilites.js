const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const tokens = ['+', '-', '*'];
const miniCalc = (num1, separator, num2) => {
  if (separator === '+') {
    return num1 + num2;
  }
  if (separator === '-') {
    return num1 - num2;
  }
  if (separator === '*') {
    return num1 * num2;
  }
  return null;
};

const getDivisor = (value1, value2) => (
  (value1 % value2) ? getDivisor(value2, value1 % value2) : Math.abs(value2)
);

const progression = (start, length, index) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === index ? `${result} ..` : `${result} ${start + i}`;
  }

  return result;
};

const isPrime = (num) => {
  if (num === 1) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export {
  generateRandomNumber,
  isNumberEven,
  tokens,
  miniCalc,
  getDivisor,
  progression,
  isPrime,
};
