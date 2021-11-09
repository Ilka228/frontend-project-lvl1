#!/usr/bin/env node
import engine from '../src/engine.js';
import { getGameData } from '../games/brain-progression.js';

engine(getGameData);
