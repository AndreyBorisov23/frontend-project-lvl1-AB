#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, isPrime } from '../utilites.js';

const gamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
    const num = generateRandomNumber(3, 100);
    const result = isPrime(num);
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (result !== userAnswer) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gamePrime;
