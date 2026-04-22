import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { BsBalloonHeartFill } from 'react-icons/bs'

const Card = ({ revealedText }) => {
    const [isRevealed, setIsRevealed] = useState(false)

    return (
        <motion.div
            className='glass-card flex flex-col items-center justify-center w-full min-h-30 cursor-pointer'
            onClick={() => setIsRevealed(!isRevealed)}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.97 }}
            layout
            style={{ perspective: "1000px" }} 
        >
            <AnimatePresence mode='wait'>
                {!isRevealed ? (
                    <motion.div
                        key='front'
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 90 }}
                        transition={{ duration: 0.2 }}
                        // Added w-full h-full flex-1
                        className='flex flex-col items-center justify-center w-full h-full flex-1'
                    >
                        <div className='bg-primary rounded-full w-fit p-3 mb-2'>
                            <BsBalloonHeartFill color='white' fontSize={16} />
                        </div>
                        <p className="font-medium text-gray-700">Tap to open</p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateY: -90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: 90 }}
                        transition={{ duration: 0.2 }}
                        // Added w-full h-full flex-1
                        className='flex flex-col items-center justify-center w-full h-full flex-1'
                    >
                        <p className="text-lg font-semibold text-gray-800">
                            {revealedText}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Card