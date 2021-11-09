const doMath = (x, znak, y) => {
  let math = 0;

  switch (znak) {
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

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rangeStart = 2;
const rangeEnd = 40;
const items = ['*', '+', '-'];
const condition = 'What is the result of the expression?';
export const getGameData = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const item = items[Math.floor(Math.random() * items.length)];
  const question = `${number1} ${item} ${number2}`;
  const correctAnswer = String(doMath(number1, item, number2));

  return [question, correctAnswer, condition];
};
