#!/usr/bin/env node
import { playPrime } from '../src/games/prime.js';
import { cli } from '../src/games/cli.js';
const name = cli();
playPrime(name);
