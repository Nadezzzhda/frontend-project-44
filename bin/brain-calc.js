#!/usr/bin/env node

import greetings from '../src/games/brain-games.js'
import userName from '../src/index.js'
import { questionForUser } from '../src/index.js'
import { questionText, generateCalcData } from '../src/games/brain-calc.js'

greetings()
const name = userName()
questionForUser(name, questionText, generateCalcData)
