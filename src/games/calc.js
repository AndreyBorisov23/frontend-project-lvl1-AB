import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const operators = ['+', '-', '*'];

const isCalculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const mission = 'What is the result of the expression?';

const makeGameRound = () => {
  const num1 = generateRandomNumber(0, 20);
  const num2 = generateRandomNumber(0, 20);
  const randomToken = operators[generateRandomNumber(0, operators.length - 1)];
  const question = (`${num1} ${randomToken} ${num2}`);
  const answer = (isCalculate(num1, randomToken, num2)).toString();
  return packData(question, answer);
};

export default () => brainGames(mission, makeGameRound);
