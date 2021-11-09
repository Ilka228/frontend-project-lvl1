import readlineSync from 'readline-sync';
import greet from './cli.js';

const roundCount = 3;
const engine = (getGameData) => {
  const userName = greet();
  const task = getGameData();
  console.log(task[2]);
  for (let i = 0; i < roundCount; i += 1) {
    const gameData = getGameData();
    console.log(`Question: ${gameData[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (gameData[1] === userAnswer) {
      console.log('Correct!');
      if (i === (roundCount - 1)) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};
export default engine;
