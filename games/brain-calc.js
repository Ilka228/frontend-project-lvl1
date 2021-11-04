import { getRandomInRange, doMath } from '../src/cli.js';

const rangeStart = 2;
const rangeEnd = 40;
const items = ['*', '+', '-'];
export const condition = 'What is the result of the expression?';
export const genQuest = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const item = items[Math.floor(Math.random() * items.length)];
  const question = `${number1} ${item} ${number2}`;
  const correctAnswer = String(doMath(number1, item, number2));

  return [question, correctAnswer];
};
