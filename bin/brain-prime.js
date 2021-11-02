#!/usr/bin/env node
import answer, { greet } from '../src/cli.js';

const name1 = greet();

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const section1 = 2;
const section2 = 1000;

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(condition);

for (let i = 1; i < 4; i += 1) {
  const number1 = getRandomInRange(section1, section2);
  console.log(`Question: ${number1}`);

  const certanswer = answer();
  const correctAnswer = isPrime(number1);
  if (correctAnswer === certanswer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name1}!`);
    }
  } else {
    console.log(`'${certanswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name1}!`);
    break;
  }
}
