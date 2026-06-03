#!/usr/bin/env node
import { playEven } from '../src/games/even.js';
import { cli } from '../src/games/cli.js';
const name = cli();
playEven(name);
