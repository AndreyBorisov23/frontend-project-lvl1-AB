#!/usr/bin/env node
import { generateRandomNumber, packTheData } from '../utilites.js';
import brainGames from '../index.js';

const tokens = ['+', '-', '*'];
const miniCalc = (num1, separator, num2) => {
  if (separator === '+') {
    return num1 + num2;
  }
  if (separator === '-') {
    return num1 - num2;
  }
  if (separator === '*') {
    return num1 * num2;
  }
  return null;
};

const mission = 'What is the result of the expression?';

const gameCalc = () => {
  const num1 = generateRandomNumber(0, 20);
  const num2 = generateRandomNumber(0, 20);
  const randomToken = tokens[generateRandomNumber(0, 2)];
  const quastion = (`${num1} ${randomToken} ${num2}`);
  const answer = (miniCalc(num1, randomToken, num2)).toString();
  return packTheData(quastion, answer);
};
export default () => brainGames(mission, gameCalc);
