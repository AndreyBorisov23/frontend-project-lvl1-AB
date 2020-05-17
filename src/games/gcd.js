import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const getDivisor = (value1, value2) => (
  (value1 % value2) ? getDivisor(value2, value1 % value2) : Math.abs(value2)
);

const mission = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const num1 = generateRandomNumber(2, 20);
  const num2 = generateRandomNumber(2, 20);
  const quastion = (`${num1} ${num2}`);
  const answer = (getDivisor(num1, num2)).toString();
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameGcd);
