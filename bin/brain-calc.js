#!/usr/bin/env node
import { launchcalc } from '../src/index.js';

const section1 = 2;
const section2 = 40;
const items = ['*', '+', '-'];
const condition = 'What is the result of the expression?';
launchcalc(condition, section1, section2, items);
