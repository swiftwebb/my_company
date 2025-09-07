import React from 'react'
import { motion } from "motion/react"

const Title = ({ title, desc }) => {
  return (
    <>
    <motion.h2
    initial={{opacity: 0, y: 30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{ once:true }} 
    className='text-3-l sm:text-5xl font-medium'>{title}</motion.h2>
    <motion.p 
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.2}}
    viewport={{ once:true }} 
    className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</motion.p>
    </>
  )
}

export default Title