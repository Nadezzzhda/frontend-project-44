import readlineSync from 'readline-sync'

const generateNum = () => {
  const number = Math.round(Math.random() * 10)
  return number
}

const isEven = number => number % 2 === 0 ? 'yes' : 'no'

const questionForUser = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 1; i <= 3; i += 1) {
    const questionNum = generateNum()
    const realAnswer = isEven(questionNum)
    console.log(`Question: ${questionNum}!`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === realAnswer) {
      console.log('Correct!')
    }
    else {
      console.log (`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`)
      console.log(`Let's try again, ${userName}`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
  return
}

export default questionForUser
