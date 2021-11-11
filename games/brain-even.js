const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rangeStart = 10;
const rangeEnd = 20;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if ((number % 2) !== 0) {
    return false;
  } 
  return true;
}
const getGameData = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer, condition];
};
export default getGameData;
