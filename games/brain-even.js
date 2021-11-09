
const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const rangeStart = 10;
const rangeEnd = 20;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
export const getGameData = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  let correctAnswer = 0;
  if ((question % 2) === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer, condition];
};
