import { getRandomInRange, gcd } from '../src/cli.js';

const rangeStart = 1;
const rangeEnd = 1000;
export const condition = 'Find the greatest common divisor of given numbers.';
export const genQuest = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};
