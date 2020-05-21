import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const operators = ['+', '-', '*'];
const miniCalc = (num1, operator, num2) => {
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
  const quastion = (`${num1} ${randomToken} ${num2}`);
  const answer = (miniCalc(num1, randomToken, num2)).toString();
  return packData(quastion, answer);
};
export default () => brainGames(mission, makeGameRound);
