import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import HeartsBg from './components/HeartsBg'
import Intro from './components/Intro'
import Progress from './components/Progress'
import Reveal from './components/Reveal'
import Final from './components/Final'
import Card from './components/ui/Card'
import FutureHope from './components/FutureHope'
import introImg from './assets/intro.png'
import coupleImg from './assets/reveal.png'
import finalImg from './assets/final.png'
import heartImg from './assets/heart.png'
import byeImg from './assets/final.png'

const App = () => {

  const [step, setStep] = useState(1)

  const screen = [
    <Intro key='intro' next={() => setStep(prev => prev + 1)} />,
    <Progress key='progress' next={() => setStep(prev => prev + 1)} />,
    <Reveal key='reveal' next={() => setStep(prev => prev + 1)} />,
    <FutureHope key='hope' next={() => setStep(prev => prev + 1)} />,
    <Final key='final' />
  ]
  useEffect(() => {
    const images = [introImg, coupleImg, byeImg, heartImg]

    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-love overflow-hidden">

      {/* 💖 Background Hearts */}
      <HeartsBg />

      {/* 🌸 Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <AnimatePresence mode="wait">
          {
            screen[step - 1]
          }
        </AnimatePresence>
      </div>

    </div>
  )
}

export default App