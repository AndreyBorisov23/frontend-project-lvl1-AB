#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, tokens, miniCalc } from '../utilites.js';


const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?.');
  const testLenght = 3;
  for (let i = 0; i <= testLenght;) {
    if (i === testLenght) {
      return `Congratulations, ${name}!`;
    }
    const num1 = generateRandomNumber(0, 20);
    const num2 = generateRandomNumber(0, 20);
    const randomToken = tokens[generateRandomNumber(0, 2)];
    const result = miniCalc(num1, randomToken, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${randomToken} ${num2}\nYour answer: `);
    if (result !== Number(userAnswer)) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gameCalc;
