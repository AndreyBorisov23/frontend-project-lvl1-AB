const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const packData = (question, answer) => ([question, answer]);
const getQuestion = (object) => object[0];
const getAnswer = (object) => object[1];

export {
  generateRandomNumber,
  packData,
  getQuestion,
  getAnswer,
};
