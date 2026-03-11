export const questionText = 'What is the result of the expression?'

export const generateCalcData = () => {
  const numberA = Math.round(Math.random() * 30)
  const numberB = Math.round(Math.random() * 30)
  const operators = ['+', '-', '*']
  const index = Math.floor(Math.random() * operators.length)
  const question = `${numberA} ${operators[index]} ${numberB}`
  const correctAnswer = String(calculate(numberA, numberB, operators[index]))
  return [question, correctAnswer]
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return null
  }
}
