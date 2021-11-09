const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const rangeStart = 2;
const rangeEnd = 1000;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const getGameData = () => {
  const question = getRandomInRange(rangeStart, rangeEnd);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer, condition];
};
