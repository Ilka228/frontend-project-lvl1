import readlineSync from 'readline-sync';

export const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const answer = () => {
  const name = readlineSync.question('Your answer:');
  return name;
};
export default answer;



