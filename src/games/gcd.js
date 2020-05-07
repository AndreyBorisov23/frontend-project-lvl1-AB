#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, getDivisor } from '../utilites.js';

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
    const num1 = generateRandomNumber(2, 20);
    const num2 = generateRandomNumber(2, 20);
    const result = getDivisor(num1, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
    if (result !== Number(userAnswer)) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gameGcd;
