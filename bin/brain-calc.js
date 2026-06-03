#!/usr/bin/env node

import { cli } from '../src/games/cli.js';
import { playCal } from '../src/games/calc.js';

const name = cli();
playCal(name); 