#!/usr/bin/env node

import { launchprime } from '../src/index.js';

const section1 = 2;
const section2 = 1000;
const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
launchprime(condition, section1, section2);
