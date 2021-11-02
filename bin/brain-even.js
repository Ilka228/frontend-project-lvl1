#!/usr/bin/env node

import answer, { greet } from '../src/cli.js';

const name1 = greet();
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const section1 = 10;
const section2 = 20;

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(condition);
for (let i = 1; i < 4; i += 1) {
  const number = getRandomInRange(section1, section2);
  console.log(`Question: ${number}`);
  const certanswer = answer();
  if (((number % 2) === 0 && certanswer === 'yes') || ((number % 2) === 1 && certanswer === 'no')) {
    console.log('Correct! ');
    if (i === 3) {
      console.log(`Congratulations, ${name1}!`);
    }
  } else {
    if ((number % 2) === 0) {
      console.log(`'${certanswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    }
    if ((number % 2) === 1) {
      console.log(`'${certanswer}' is wrong answer ;(. Correct answer was 'no'.`);
    }

    console.log(`Let's try again, ${name1}!`);
    break;
  }
}
