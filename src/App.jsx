import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import HeartsBg from './components/HeartsBg'
import Intro from './components/Intro'
import Progress from './components/Progress'
import Reveal from './components/Reveal'
import Final from './components/Final'
import Card from './components/ui/Card'
import FutureHope from './components/FutureHope'

const App = () => {

  const [step, setStep] = useState(1)

  const screen = [
    <Intro key='intro' next={() => setStep(prev => prev + 1)} />,
    <Progress key='progress' next={() => setStep(prev => prev + 1)} />,
    <Reveal key='reveal' next={() => setStep(prev => prev + 1)} />,
    <FutureHope key='hope' next={() => setStep(prev => prev + 1)} />,
    <Final key='final' />
  ]

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