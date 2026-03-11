export const questionText = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateEvenData = () => {
  const question = Math.round(Math.random() * 10)
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}
