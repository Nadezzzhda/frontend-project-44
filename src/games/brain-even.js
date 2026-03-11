import { random10 } from '../index.js'

export const questionText = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateEvenData = () => {
  const question = random10()
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}
