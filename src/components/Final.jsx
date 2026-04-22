import { motion, AnimatePresence } from 'motion/react'
import React, { useState } from 'react'
import byeImg from '../assets/final.png'

const Final = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })

    const moveButton = () => {
        // Generate a random number between -150 and 150 for X and Y
        const newX = Math.floor(Math.random() * 300) - 150
        const newY = Math.floor(Math.random() * 300) - 150
        setNoPosition({ x: newX, y: newY })
    }

    // Container variants for staggering children
    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.5, delayChildren: 0.5 }
        }
    }

    // Item variants for the actual slide-up effect
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className='glass-card flex flex-col items-center w-87.5 sm:w-112.5 md:w-125 lg:w-150 h-140 p-8'
        >
            {/* AnimatePresence for smoothly swapping to the Bye screen */}
            <AnimatePresence mode="wait">
                {!isClicked ? (
                    <motion.div
                        key='mainCard'
                        exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                        transition={{ duration: 0.3 }}
                        className='w-full h-full flex flex-col items-center justify-center'
                    >
                        {/* variants={item} makes this text stagger in */}
                        <motion.h1
                            variants={item}
                            className='text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-cute mb-12'
                        >
                            Forgive Me?
                        </motion.h1>

                        {/* variants={item} makes the buttons stagger in after the text */}
                        <motion.div
                            variants={item}
                            className='flex items-center justify-center gap-6 sm:gap-10 w-full relative'
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsClicked(true)}
                                className='btn-love px-10 py-3 text-lg z-10'
                            >
                                Yes 💖
                            </motion.button>

                            <motion.button
                                animate={{ x: noPosition.x, y: noPosition.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onMouseEnter={moveButton}
                                onClick={moveButton}
                                onTouchStart={moveButton}
                                className='bg-gray-200 text-gray-600 font-bold px-10 py-3 rounded-full shadow-sm text-lg'
                                style={{ position: noPosition.x !== 0 ? "absolute" : "relative" }}
                            >
                                No 😢
                            </motion.button>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="byeCard"
                        initial="hidden"
                        animate="visible"
                        // Setting up a new stagger for the final Bye Bye elements
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.3 } }
                        }}
                        className='flex flex-col items-center justify-center h-full w-full'
                    >
                        <motion.div variants={item} className='w-[80%] mb-6 flex justify-center'>
                            <img src={byeImg} alt="Bye Cutie" className="object-contain" />
                        </motion.div>

                        <motion.p variants={item} className='font-cute text-xl sm:text-2xl md:text-4xl lg:text-6xl text-center'>
                            Bye Bye Cutie...
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Final