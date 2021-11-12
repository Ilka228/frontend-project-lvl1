const rangeStart = 0;
const rangeEnd = 40;
const countMin = 5;
const countMax = 13;
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const condition = 'What number is missing in the progression?';
const progression = (numbersBegin, difference, randomNumber, count) => {
  const numbers = [];
  for (let n = 0; n < count; n += 1) {
    numbers.push(numbersBegin + (difference * n));
  }
  numbers[randomNumber] = '..';
  const progres = numbers.join(' ');
  return progres;
};
const getGameData = () => {
  const numbersBegin = getRandomInRange(rangeStart, rangeEnd);
  const difference = getRandomInRange(rangeStart, rangeEnd);
  const count = getRandomInRange(countMin, countMax);
  const randomNumber = getRandomInRange(0, count - 1);
  const correctAnswer = String(numbersBegin + (difference * randomNumber));
  const question = progression(numbersBegin, difference, randomNumber, count);
  return [question, correctAnswer, condition];
};
export default getGameData;
