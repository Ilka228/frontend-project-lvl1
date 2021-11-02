#!/usr/bin/env node
import answer, {greet} from '../src/cli.js';
const name1 = greet();

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const section1 = 1;
const section2 = 1000;
const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const condition = 'Find the greatest common divisor of given numbers.';
console.log(condition);
for (let i = 1; i < 4; i += 1) {
  const number1 = getRandomInRange(section1, section2);
  const number2 = getRandomInRange(section1, section2);
  console.log(`Question: ${number1} ${number2}`);
  // console.log(eval(number1 + item + number2));
  const certanswer = Number(answer());
  if (Number(gcd(number1, number2)) === certanswer) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name1}!`);
    }
  } else {
    console.log(`'${certanswer}' is wrong answer ;(. Correct answer was '${gcd(number1, number2)}'.`);
    console.log(`Let's try again, ${name1}!`);
    break;
  }
}
