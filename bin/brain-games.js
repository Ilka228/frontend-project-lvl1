#!/usr/bin/env node
import greet from '../src/cli.js';

console.log('Welcome to the Brain Games!');
// import readlineSync from 'readline-sync';

// let name = readlineSync.question('May I have your name? ');

const name = greet();
console.log(`Hello, ${name}!`);
