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
  } else if (separator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const getDivisor = (value1, value2) => (
  (value1 % value2) ? getDivisor(value2, value1 % value2) : Math.abs(value2)
);

export {
  generateRandomNumber,
  isNumberEven,
  tokens,
  miniCalc,
  getDivisor,
};
