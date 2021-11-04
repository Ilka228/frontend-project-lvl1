import { answer, greet } from './cli.js';

function engine(condition, genQuest) {
  const userName = greet();// приветсвие
  console.log(condition);// условия задания
  for (let i = 0; i < 3; i += 1) {
    const arr = genQuest();
    console.log(`Question: ${arr[0]}`);
    const certAnswer = answer();// получение
    if (arr[1] === certAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${certAnswer}' is wrong answer ;(. Correct answer was '${arr[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
}
export default engine;
