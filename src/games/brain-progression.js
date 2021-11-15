import engine from '../engine.js';
import getRandomInRange from '../randomFunc.js';

const rangeStart = 0;
const rangeEnd = 40;
const countMin = 5;
const countMax = 13;
const condition = 'What number is missing in the progression?';

const progression = (numbersBegin, difference, count) => {
  const numbers = [];
  for (let n = 0; n < count; n += 1) {
    numbers.push(numbersBegin + (difference * n));
  }

  return numbers;
};
const getGameData = () => {
  const numbersBegin = getRandomInRange(rangeStart, rangeEnd);
  const difference = getRandomInRange(rangeStart, rangeEnd);
  const count = getRandomInRange(countMin, countMax);
  const randomNumber = getRandomInRange(0, count - 1);
  const progres = progression(numbersBegin, difference, count);
  const correctAnswer = String(progres[randomNumber]);

  progres[randomNumber] = '..';
  const question = progres.join(' ');
  return [question, correctAnswer];
};
const engineProgression = () => engine(condition, getGameData);
export default engineProgression;
