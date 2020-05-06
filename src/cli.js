#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const greetingName = (`Hello, ${name}!`);
  return greetingName;
};
export default greeting;
