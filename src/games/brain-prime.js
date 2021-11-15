import engine from '../engine.js';
import getRandomInRange from '../randomFunc.js';

const rangeStart = 1;
const rangeEnd = 1000;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const enginePrime = () => engine(condition, getGameData);
export default enginePrime;
