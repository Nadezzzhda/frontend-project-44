#!/usr/bin/env node

import greetings from '../src/games/brain-games.js'
import userName from '../src/index.js'
import { questionForUser } from '../src/index.js'
import { questionText, generatePrimeData } from '../src/games/brain-prime.js'

greetings()
const name = userName()
questionForUser(name, questionText, generatePrimeData)
