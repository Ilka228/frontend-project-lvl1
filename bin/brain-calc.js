import answer from '../src/cli.js';
import { name1 } from './brain-games.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const section1 = 2;
const section2 = 40;

const condition = 'What is the result of the expression?';
console.log(condition);
const items = ['*', '+', '-'];
for (let i = 1; i < 4; i += 1) {
  const number1 = getRandomInRange(section1, section2);
  const number2 = getRandomInRange(section1, section2);
  const item = items[Math.floor(Math.random() * items.length)];
  console.log(`Question: ${number1} ${item} ${number2}`);
  // console.log(eval(number1 + item + number2));
  const certanswer = Number(answer());
  if (Number(eval(number1 + item + number2)) === certanswer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name1}!`);
    }
  } else {
    console.log(`'${certanswer}' is wrong answer ;(. Correct answer was '${eval(number1 + item + number2)}'.`);
    console.log(`Let's try again, ${name1}!`);
    break;
  }
}
