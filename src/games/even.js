import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const quastion = generateRandomNumber(0, 100);
  const answer = isNumberEven(quastion) ? 'yes' : 'no';
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameEven);
