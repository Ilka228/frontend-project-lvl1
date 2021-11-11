#!/usr/bin/env node

import engine from '../src/engine.js';
import getGameData from '../src/games/brain-gcd.js';

engine(getGameData);
