import { getRandomInRange, isPrime } from '../src/cli.js';

const rangeStart = 2;
const rangeEnd = 1000;
export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const genQuest = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};
