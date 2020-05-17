import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utilites.js';

const brainGames = (mission, getAnswerOrQuastion) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${mission}`);
  const testLenght = 3;
  for (let i = 0; i < testLenght; i += 1) {
    const gameInfo = getAnswerOrQuastion();
    const question = getQuestion(gameInfo);
    const correctAnswer = getAnswer(gameInfo);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default brainGames;
