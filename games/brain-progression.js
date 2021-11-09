

const rangeStart = 0;
const rangeEnd = 40;
const countMin = 5;
const countMax = 13;
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const condition = 'What number is missing in the progression?';
export const getGameData = () => {
  const arrBegin = getRandomInRange(rangeStart, rangeEnd);
  const difference = getRandomInRange(rangeStart, rangeEnd);
  const count = getRandomInRange(countMin, countMax);
  const randomNumber = getRandomInRange(0, count - 1);
  const arr = [];
  for (let n = 0; n < count; n += 1) {
    arr.push(arrBegin + (difference * n));
  }
  arr[randomNumber] = '..';
  const question = arr.join(' ');
  const correctAnswer = String(arrBegin + (difference * randomNumber));
  return [question, correctAnswer, condition];
};

 
