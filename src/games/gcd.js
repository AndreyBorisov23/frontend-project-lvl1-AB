import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const findGCD = (value1, value2) => (
  (value1 % value2) ? findNOD(value2, value1 % value2) : Math.abs(value2)
);

const mission = 'Find the greatest common divisor of given numbers.';

const makeGameRound = () => {
  const num1 = generateRandomNumber(2, 20);
  const num2 = generateRandomNumber(2, 20);
  const question = (`${num1} ${num2}`);
  const answer = (findGCD(num1, num2)).toString();
  return packData(question, answer);
};

export default () => brainGames(mission, makeGameRound);
