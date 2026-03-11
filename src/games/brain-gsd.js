import { random10 } from '../index.js'

export const questionText = 'Find the greatest common divisor of given numbers.'

const getGsd = (a, b) => {
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

export const generateGsdData = () => {
  const commonMult = random10()
  const numberA = random10() * commonMult
  const numberB = random10() * commonMult
  const question = `${numberA} ${numberB}`
  const correctAnswer = String(getGsd(numberA, numberB))
  return [question, correctAnswer]
}
