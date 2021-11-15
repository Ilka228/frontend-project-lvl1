import engine from '../engine.js';
import getRandomInRange from '../randomFunc.js';

const rangeStart = 2;
const rangeEnd = 40;
const items = ['*', '+', '-'];
const condition = 'What is the result of the expression?';

const getMathResult = (x, mathSign, y) => {
  let math = 0;

  switch (mathSign) {
    case '+':
      math = x + y;
      break;

    case '-':
      math = x - y;
      break;

    case '*':
      math = x * y;
      break;

    default:
      break;
  }

  return math;
};

const getGameData = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const randomNumber = getRandomInRange(0, items.length - 1);
  const item = items[randomNumber];
  const question = `${number1} ${item} ${number2}`;
  const correctAnswer = String(getMathResult(number1, item, number2));

  return [question, correctAnswer];
};
const engineCalc = () => engine(condition, getGameData);
export default engineCalc;
