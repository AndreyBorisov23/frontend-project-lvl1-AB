#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, isNumberEven } from './utilites.js';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greetingName = (`Hello, ${name}!`);
  console.log(greetingName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
    const num = generateRandomNumber(0, 100);
    const userAnswer = readlineSync.question(`Question: ${num} `);
    if (isNumberEven(num) !== userAnswer) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(num)}. Let's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gameEven;
