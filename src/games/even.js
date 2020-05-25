import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGameRound = () => {
  const question = generateRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return packData(question, answer);
};

export default () => brainGames(mission, makeGameRound);
