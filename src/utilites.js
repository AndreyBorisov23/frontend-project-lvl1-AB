const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const packTheData = (question, answer) => ([question, answer]);

export {
  generateRandomNumber,
  packTheData,
};
