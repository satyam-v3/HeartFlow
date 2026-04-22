import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Card from './ui/Card'
import { BsBalloonHeartFill } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Reveal = ({ next }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const cardsData = [
        {
            id: 1,
            text: "I'm really sorry if I hurt you... that was never my intention 🥺"
        },
        {
            id: 2,
            text: "I know I messed up that day… and I’ve been thinking about it a lot"
        },
        {
            id: 3,
            text: "I hate the idea of you being upset because of me..."
        },
        {
            id: 4,
            text: "You mean so much to me, more than I ever say out loud 💗"
        },
        {
            id: 5,
            text: "You're literally my favorite human... no competition 😤💖"
        },
        {
            id: 6,
            text: "I miss your smile... and I just want things to be okay again 💞"
        }
    ]

    const container = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5 }
        }
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className='flex flex-col gap-10 items-center'
        >
            {/* Title */}
            <h1 className='font-cute text-xl sm:text-2xl md:text-4xl lg:text-6xl'>
                A little note for you
            </h1>

            {/* Glass Card */}
            <motion.div
                layout
                className='glass-card flex flex-col w-87.5 sm:w-112.5 md:w-125 lg:w-150 h-125 overflow-hidden'
            >
                <AnimatePresence mode='wait'>
                    {!isFlipped ? (
                        /* 🔒 Closed State */
                        <motion.div
                            key='mainCard'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsFlipped(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex flex-col items-center justify-center cursor-pointer w-full h-full p-6'
                        >
                            <div className='bg-primary rounded-full w-fit p-4 mb-2'>
                                <BsBalloonHeartFill color='white' fontSize={20} />
                            </div>
                            <p className="font-medium text-gray-700">Tap to open</p>
                        </motion.div>
                    ) : (
                        /* 💌 Opened State */
                        <motion.div
                            key="revealed-content"
                            className="flex flex-col w-full h-full p-6 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {/* Scrollable Cards */}
                            <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                                {cardsData.map((card) => (
                                    <motion.div
                                        key={card.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: card.id * 0.1 }}
                                    >
                                        <Card revealedText={card.text} />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Fixed Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={next}
                                className='btn-love flex items-center justify-center gap-2 cursor-pointer shrink-0'
                            >
                                See more <FaLongArrowAltRight />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default Reveal