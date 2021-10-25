#!/usr/bin/env node
console.log('Welcome to the Brain Games!');
import { greet } from '../src/cli.js';
//import readlineSync from 'readline-sync';

//let name = readlineSync.question('May I have your name? ');

const name = greet();
console.log('Hello, ' + name + '!');