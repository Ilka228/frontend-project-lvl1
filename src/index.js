import answer, { greet } from './cli.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const isPrime = (num) => {
  for (let n = 2; n < num; n += 1) {
    if (num % n === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const launchcalc = (condition, section1, section2, items) => {
  const name1 = greet();
  console.log(condition);
  for (let i = 1; i < 4; i += 1) {
    const number1 = getRandomInRange(section1, section2);
    const number2 = getRandomInRange(section1, section2);
    const item = items[Math.floor(Math.random() * items.length)];
    console.log(`Question: ${number1} ${item} ${number2}`);

    const certanswer = Number(answer());
    const doMath = (x, znak, y) => {
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

    if (doMath(number1, item, number2) === certanswer) {
      console.log('Correct!');
      if (i === 3) {
        console.log(`Congratulations, ${name1}!`);
      }
    } else {
      console.log(`'${certanswer}' is wrong answer ;(. Correct answer was '${doMath(number1, item, number2)}'.`);
      console.log(`Let's try again, ${name1}!`);
      break;
    }
  }
};

export const launcheven = (condition, section1, section2) => {
  const name1 = greet();
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
};

export const launchgcd = (condition, section1, section2) => {
  const name1 = greet();
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
};

export const launchprime = (condition, section1, section2) => {
  const name1 = greet();
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
};

export const launchprogression = (condition, section1, section2, countMin, countMax) => {
  const name1 = greet();
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
};
