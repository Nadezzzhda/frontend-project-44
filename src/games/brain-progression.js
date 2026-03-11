import { random10 } from '../index.js'

export const questionText = 'What number is missing in the progression?'

export const generateProgressionData = () => {
  const start = Math.round(Math.random() * 20)
  const step = random10()
  const missedElement = Math.round(Math.random() * 9)
  const progression = []
  let correctAnswer = ''
  for (let i = 0; i <= 9; i += 1) {
    let currentElement = start + i * step
    if (i === missedElement) {
      progression.push('..')
      correctAnswer = String(currentElement)
    }
    else {
      progression.push(currentElement)
    }
  }
  const question = progression.join(' ')
  return [question, correctAnswer]
}
