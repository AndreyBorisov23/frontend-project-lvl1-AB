import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGameRound = () => {
  const quastion = generateRandomNumber(1, 100);
  const answer = isPrime(quastion) ? 'yes' : 'no';
  return packData(quastion, answer);
};
export default () => brainGames(mission, makeGameRound);
