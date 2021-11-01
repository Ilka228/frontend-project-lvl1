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
    let arr = [];
    for (let n = 0; n < count; i += 1) {
        arr.push(arrBegin + (difference * i));
    }
    console.log(arr);
    }
  