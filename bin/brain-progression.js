#!/usr/bin/env node

import { cli } from '../src/games/cli.js';
import { playProgression } from '../src/games/progression.js';

const name = cli();
playProgression(name);