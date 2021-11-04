import { getRandomInRange } from '../src/cli.js';

const rangeStart = 10;
const rangeEnd = 20;
export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
export const genQuest = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  let correctAnswer = 0;
  if ((question % 2) === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
