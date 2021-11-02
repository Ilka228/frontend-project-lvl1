#!/usr/bin/env node
import { launchprogression } from '../src/index.js';

const section1 = 0;
const section2 = 40;
const countMin = 5;
const countMax = 13;

const condition = 'What number is missing in the progression?';
launchprogression(condition, section1, section2, countMin, countMax);
