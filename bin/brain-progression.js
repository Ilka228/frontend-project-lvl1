import answer from '../src/cli.js';
import { name1 } from './brain-games.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const section1 = 0;
const section2 = 40;
const countMin = 5;
const countMax = 13;

const condition = 'What number is missing in the progression?';
console.log(condition);
for (let i = 1; i < 4; i += 1) {
  const arrBegin = getRandomInRange(section1, section2);
  const difference = getRandomInRange(section1, section2);
  const count = getRandomInRange(countMin, countMax);
  const arr = [];
  for (let n = 0; n < count; n += 1) {
    arr.push(arrBegin + (difference * n));
  }
  const randomNumber = getRandomInRange(0, count - 1);
  arr[randomNumber] = '..';
  console.log(`Question: ${arr.join(' ')}`);
  const certanswer = Number(answer());
  if ((arrBegin + (difference * randomNumber)) === certanswer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name1}!`);
    }
  } else {
    console.log(`'${certanswer}' is wrong answer ;(. Correct answer was '${(arrBegin + (difference * randomNumber))}'.`);
    console.log(`Let's try again, ${name1}!`);
    break;
  }
}
