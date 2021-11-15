import readlineSync from 'readline-sync';

const roundsCount = 3;
const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const engine = (condition, getGameData) => {
  const userName = greet();
  console.log(condition);
  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = getGameData();
    console.log(`Question: ${gameData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gameData[1] !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default engine;
