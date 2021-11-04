import readlineSync from 'readline-sync';

export function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export const answer = () => {
  const name = readlineSync.question('Your answer: ');
  return name;
};

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

export const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const doMath = (x, znak, y) => {
  let math = 0;

  switch (znak) {
    case '+':

      math = x + y;

      break;

    case '-':

      math = x - y;

      break;

    case '*':

      math = x * y;

      break;

    default:

      break;
  }

  return math;
};
