import engine from '../engine.js';
import getRandomInRange from '../randomFunc.js';

const rangeStart = 1;
const rangeEnd = 1000;
const condition = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const getGameData = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return [question, correctAnswer];
};
const engineGcd = () => engine(condition, getGameData);
export default engineGcd;
