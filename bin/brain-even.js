#!/usr/bin/env node

import engine from '../src/engine.js';
import { condition, genQuest } from '../games/brain-even.js';

engine(condition, genQuest);
