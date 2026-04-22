import React from 'react'
import introImg from '../assets/intro.png'
import { motion } from 'motion/react'

const Intro = ({ next }) => {

    const container = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.5,
                delayChildren: 0.5
            }
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }
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
            className='glass-card flex flex-col items-center justify-between w-87.5 sm:w-112.5 md:w-125 lg:w-150'
        >

            <motion.div
                variants={item}
                className='mb-5 w-[80%]'
            >
                <img src={introImg} loading='lazy' />
            </motion.div>

            <motion.p
                variants={item}
                className='heading-romantic text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5'
            >
                Hey Princess!... I have Somthing for you.
            </motion.p>

            <motion.button
                variants={item}
                onClick={next} className='btn-love'
            >
                Tap to open Something
            </motion.button>
        </motion.div>
    )
}

export default Intro