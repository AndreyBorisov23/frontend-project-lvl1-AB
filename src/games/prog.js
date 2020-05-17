import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const makeQuestion = (start, length, index) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === index ? `${result}.. ` : `${result}${start + i} `;
  }

  return result;
};

const mission = 'What number is missing in the progression?';

const gameProg = () => {
  const progStart = 1;
  const progLength = 10;
  const index = generateRandomNumber(progStart, progLength - 1);
  const quastion = makeQuestion(progStart, progLength, index);
  const answer = (progStart + 1 * index).toString();
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameProg);
