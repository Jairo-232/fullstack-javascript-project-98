#!/usr/bin/env node

import { cli } from '../src/games/cli.js';
import { playGcd } from '../src/games/gcd.js';

const name = cli(); 
playGcd(name); 