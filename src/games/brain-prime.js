export const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generatePrimeData = () => {
  const number = Math.round(Math.random() * 100)
  const question = String(number)
  if (number <= 1) {
    return [question, 'no']
  }
  if (number === 2) {
    return [question, 'yes']
  }
  let correctAnswer = 'yes'
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no'
      break
    }
  }
  return [question, correctAnswer]
}
