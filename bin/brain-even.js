#!/usr/bin/env node

import greetings from '../src/brain-games.js'
import userName from '../src/cli.js'
import questionForUser from '../src/brain-even.js'

greetings()
const name = userName()
questionForUser(name)
