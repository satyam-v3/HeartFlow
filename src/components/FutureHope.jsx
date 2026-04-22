import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Typewriter from './ui/Typewriter'
import coupleImg from '../assets/reveal.png'

const FutureHope = ({ next }) => {

    const [lineIndex, setLineIndex] = useState(0)

    const lines = [
        "When I think about us...",
        "I don’t just see today,",
        "I see something beautiful… lasting… real.",
        "I imagine us like this… forever together 💗"
    ]

    const container = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3
            }
        },
        exit: {
            opacity: 0,
            y: -40,
            transition: { duration: 0.6 }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='glass-card flex flex-col items-center text-center gap-6 w-87.5 sm:w-112.5 md:w-125 lg:w-150'
        >

            {/* 🖼️ Image */}
            <motion.div className='w-[80%] overflow-hidden rounded-xl'>
                <motion.img
                    src={coupleImg}
                    alt="us"
                    className='w-full object-cover'
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </motion.div>

            {/* 💬 Typewriter Lines */}
            <div className='flex flex-col gap-3 min-h-35'>

                {lines.map((line, index) => (
                    <p
                        key={index}
                        className={`whitespace-pre-wrap ${index === 0 || index === lines.length - 1
                                ? 'font-romantic text-primary text-lg sm:text-xl md:text-2xl'
                                : 'font-poppins text-sm sm:text-base md:text-lg text-gray-700'
                            }`}
                    >
                        <Typewriter
                            text={line}
                            active={lineIndex === index}
                            done={lineIndex > index}
                            onComplete={() => setLineIndex(prev => prev + 1)}
                        />
                    </p>
                ))}

            </div>

            {/* 👉 Button appears AFTER all lines */}
            <AnimatePresence>
                {lineIndex === lines.length && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={next}
                        className='btn-love mt-4'
                    >
                        Continue
                    </motion.button>
                )}
            </AnimatePresence>

        </motion.div>
    )
}

export default FutureHope