#!/usr/bin/env node

import { launcheven } from '../src/index.js';

const section1 = 10;
const section2 = 20;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
launcheven(condition, section1, section2);
