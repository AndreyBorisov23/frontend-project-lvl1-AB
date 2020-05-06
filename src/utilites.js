const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export { generateRandomNumber, isNumberEven };
