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
  const commonMult = Math.round(Math.random() * 10)
  const numberA = Math.round(Math.random() * 10) * commonMult
  const numberB = Math.round(Math.random() * 10) * commonMult
  const question = `${numberA} ${numberB}`
  const correctAnswer = String(getGsd(numberA, numberB))
  return [question, correctAnswer]
}
