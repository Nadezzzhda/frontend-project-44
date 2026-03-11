import readlineSync from 'readline-sync'

const userName = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export const random10 = () => Math.round(Math.random() * 10)

export const questionForUser = (userName, questionText, generateData) => {
  console.log(questionText)
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = generateData()

    console.log(`Question: ${question}!`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
  return
}

export default userName
