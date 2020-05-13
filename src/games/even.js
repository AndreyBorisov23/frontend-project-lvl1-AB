#!/usr/bin/env node
import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const quastion = generateRandomNumber(0, 100);
  const answer = isNumberEven(quastion);
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameEven);
