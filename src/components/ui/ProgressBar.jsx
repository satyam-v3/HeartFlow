import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { animate } from "motion"
import heartImg from '../../assets/heart.png'

const labels = [
    { threshold: 130, text: "Mine… always 😌" },
    { threshold: 100, text: "Too precious 💖" },
    { threshold: 60, text: "Very cute" },
    { threshold: 20, text: "Cute" },
    { threshold: 0, text: "Loading..." },
]

const ProgressBar = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const progressAnimation = animate(0, 135, {
            duration: 7,
            ease: "linear",
            onUpdate: (latest) => {
                setProgress(latest)
            },
            onComplete: () => {
                if (onComplete) onComplete()
            }
        })

        return () => progressAnimation.stop()

    }, [])

    const currentLabel = labels.find(l => progress >= l.threshold)?.text
    const isInfinity = progress > 100

    return (
        <div className="w-full max-w-sm p-6 mx-auto font-sans flex flex-col gap-4 text-center">

            <div className="flex items-center justify-center h-12 sm:h-24 md:h-36 lg:h-48 transition-all duration-300">
                <AnimatePresence mode="wait">
                    {isInfinity ? (
                        <motion.img
                            key="infinity-image"
                            src={heartImg}
                            loading='eager'
                            alt="Infinity Love"
                            className="w-12 h-12 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full shadow-md object-cover"
                            initial={{ scale: 0, rotate: -90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        />
                    ) : (
                        <motion.div
                            key="percentage-text"
                            className="text-4xl font-romantic font-extrabold text-gray-700"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {Math.floor(progress)}%
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
                <motion.div
                    style={{ width: `${progress}%` }}
                    className="h-full rounded-full"
                    animate={{
                        backgroundColor: isInfinity ? "#ff4d94" : "#ffb3d1"
                    }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <div className="h-8 font-bold text-gray-800 mt-2">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentLabel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                    >
                        {currentLabel}
                    </motion.span>
                </AnimatePresence>
            </div>

        </div>
    )
}

export default ProgressBar