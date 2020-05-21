import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const getMissingData = (value1, value2) => (
  (value1 % value2) ? getMissingData(value2, value1 % value2) : Math.abs(value2)
);

const mission = 'Find the greatest common divisor of given numbers.';

const makeGameRound = () => {
  const num1 = generateRandomNumber(2, 20);
  const num2 = generateRandomNumber(2, 20);
  const quastion = (`${num1} ${num2}`);
  const answer = (getMissingData(num1, num2)).toString();
  return packData(quastion, answer);
};
export default () => brainGames(mission, makeGameRound);
