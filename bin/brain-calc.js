#!/usr/bin/env node
import engine from '../src/engine.js';
import { condition, genQuest } from '../games/brain-calc.js';

engine(condition, genQuest);
