#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, progression } from '../utilites.js';

const gameProg = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
    const index = generateRandomNumber(1, 9);
    const progStart = 1;
    const progLength = 10;
    const result = progression(progStart, progLength, index);
    const realAnswer = (progStart + 1 * index);
    const userAnswer = readlineSync.question(`Question: ${result}\nYour answer: `);
    if (realAnswer !== Number(userAnswer)) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${realAnswer}.\nLet's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gameProg;
