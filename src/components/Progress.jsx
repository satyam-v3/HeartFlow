import React, { useState, useCallback } from 'react'
import ProgressBar from './ui/ProgressBar'
import { motion, AnimatePresence } from 'motion/react'

const Progress = ({ next }) => {
    const [isAnimationDone, setIsAnimationDone] = useState(false)

    const handleComplete = useCallback(() => {
        setIsAnimationDone(true)
    }, [])

    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1, scale: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.5 }
        },
        exit: {
            opacity: 0, scale: 0,
            transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='glass-card flex flex-col items-center justify-between w-87.5 sm:w-112.5 md:w-125 lg:w-150 p-6 min-h-100'
        >
            <motion.h1 variants={item} className='text-md sm:text-lg md:text-xl lg:text-2xl font-poppins'>
                How special are you?
            </motion.h1>

            <motion.div variants={item} className='flex flex-col items-center justify-between w-full'>
                {/* Pass the stabilized callback */}
                <ProgressBar onComplete={handleComplete} />
            </motion.div>

            <div className="h-12 flex items-center justify-center mt-4">
                <AnimatePresence>
                    {isAnimationDone && (
                        <motion.button
                            key="continue-btn"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.8 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className='btn-love w-37.5'
                            onClick={next}
                        >
                            Continue
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Progress