import { useState } from 'react'
import Choice from './components/Choice.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import Message from './components/Message.jsx'
import rockImg from './assets/images/rock.png'
import paperImg from './assets/images/paper.png'
import scissorImg from './assets/images/scissor.png'

const CHOICES = [
  { id: 'rock', image: rockImg },
  { id: 'paper', image: paperImg },
  { id: 'scissor', image: scissorImg },
]

// key beats value
const BEATS = { rock: 'scissor', paper: 'rock', scissor: 'paper' }

const getCompChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)].id

export default function App() {
  const [userScore, setUserScore] = useState(0)
  const [compScore, setCompScore] = useState(0)
  const [message, setMessage] = useState({
    text: 'Make your move',
    status: 'idle',
  })

  const playGame = (userChoice) => {
    const compChoice = getCompChoice()

    if (userChoice === compChoice) {
      setMessage({ text: "It's a draw", status: 'draw' })
      return
    }

    if (BEATS[userChoice] === compChoice) {
      setUserScore((s) => s + 1)
      setMessage({
        text: `You won as ${userChoice} defeats ${compChoice}`,
        status: 'win',
      })
    } else {
      setCompScore((s) => s + 1)
      setMessage({
        text: `You lose as ${compChoice} defeats ${userChoice}`,
        status: 'lose',
      })
    }
  }

  return (
    <>
      <h1 className="h-20 border-b border-edge bg-panel text-center text-2xl font-semibold leading-20 tracking-[0.25em] text-slate-100 shadow-md shadow-black/30">
        ROCK PAPER SCISSORS
      </h1>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
        {CHOICES.map(({ id, image }) => (
          <Choice key={id} id={id} image={image} onClick={playGame} />
        ))}
      </div>

      <ScoreBoard userScore={userScore} compScore={compScore} />
      <Message text={message.text} status={message.status} />
    </>
  )
}
