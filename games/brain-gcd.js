

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rangeStart = 1;
const rangeEnd = 1000;
const condition = 'Find the greatest common divisor of given numbers.';
export const getGameData = () => {
  const number1 = getRandomInRange(rangeStart, rangeEnd);
  const number2 = getRandomInRange(rangeStart, rangeEnd);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer, condition];
};
