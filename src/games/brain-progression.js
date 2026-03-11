import { random10 } from '../index.js'

export const questionText = 'What number is missing in the progression?'

export const generateProgressionData = () => {
  const start = Math.round(Math.random() * 20)
  const step = random10()
  const missedElement = Math.round(Math.random() * 9)
  let progression = ''
  let correctAnswer = ''
  for (let i = 0; i <= 9; i += 1) {
    let currentElement = start + i * step
    if (i !== missedElement) {
      progression = `${progression} ${currentElement}`
    }
    else {
      progression = `${progression} ..`
      correctAnswer = String(currentElement)
    }
  }
  const question = progression
  return [question, correctAnswer]
}
