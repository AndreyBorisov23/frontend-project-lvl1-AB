#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, } from '../utilites.js';

const Tokens = ["+", "-", "*"];
const miniCalc = (num1, separator, num2) => {
  if (separator === '+') {
    return num1 + num2;
  } else if (separator === '-') {
    return num1 - num2;
  } else if (separator === '*') {
    return num1 * num2;
  }
};

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greetingName = (`Hello, ${name}!`);
  console.log(greetingName);
  console.log('What is the result of the expression?.');
  for (let i = 0; i <= 3;) {
    if (i === 3) {
      return `Congratulations, ${name}!`;
    }
    const num1 = generateRandomNumber(0, 20);
    const num2 = generateRandomNumber(0, 20);
    const randomToken = Tokens[generateRandomNumber(0, 2)];
    const result = miniCalc(num1, randomToken, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${randomToken} ${num2}\nYour answer: `);
    if (result != userAnswer) {
      return `${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`;
    }
    i += 1;
    console.log('Correct!');
  }
  return null;
};
export default gameCalc;
