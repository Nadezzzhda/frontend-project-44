export const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".'

export const generatePrimeData = () => {
  const number = Math.round(Math.random() * 20)
  if (number <= 1) {
    return [number, 'no']
  }
  if (number === 2) {
    return [number, 'yes']
  }
  let correctAnswer = ''
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no'
      break
    }
    else {
      correctAnswer = 'yes'
    }
  }
  const question = String(number)
  return [question, correctAnswer]
}
