#!/usr/bin/env node
import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const progression = (start, length, index) => {
  let result = '';
  for (let i = 0; i < length; i += 1) {
    result = i === index ? `${result} ..` : `${result} ${start + i}`;
  }

  return result;
};

const mission = 'What number is missing in the progression?';

const gameProg = () => {
  const index = generateRandomNumber(1, 9);
  const progStart = 1;
  const progLength = 10;
  const quastion = progression(progStart, progLength, index);
  const answer = (progStart + 1 * index).toString();
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameProg);
