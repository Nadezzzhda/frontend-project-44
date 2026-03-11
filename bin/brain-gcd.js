#!/usr/bin/env node

import greetings from '../src/games/brain-games.js'
import userName from '../src/index.js'
import { questionForUser } from '../src/index.js'
import { questionText, generateGcdData } from '../src/games/brain-gcd.js'

greetings()
const name = userName()
questionForUser(name, questionText, generateGcdData)
