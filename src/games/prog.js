import { generateRandomNumber, packData } from '../utilites.js';
import brainGames from '../index.js';

const makeQuestion = (start, length, index) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === index ? `${result}.. ` : `${result}${start + i} `;
  }

  return result.trim();
};

const mission = 'What number is missing in the progression?';

const makeGameRound = () => {
  const progressionStart = 1;
  const progressionLength = 10;
  const index = generateRandomNumber(progressionStart, progressionLength - 1);
  const question = makeQuestion(progressionStart, progressionLength, index);
  const answer = (progressionStart + 1 * index).toString();
  return packData(question, answer);
};

export default () => brainGames(mission, makeGameRound);
