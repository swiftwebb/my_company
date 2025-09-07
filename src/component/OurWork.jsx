import React from 'react'
import Title from './Title'
import assets from '../assets/assets' 
import { motion } from "motion/react"
const OurWork = () => {
    
    const workData = [
        {
            title: 'Mobile app development (soon)',
            description: 'We turn bold ideas into powerful mobile apps that connect, engage, and grow your business.',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard management systems',
            description: 'We help you manage your business smarter with custom dashboard systems that track, analyze, and deliver results.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness app (soon)',
            description: 'We help you build SEO-friendly mobile apps that boost visibility and drive real results.',
            image: assets.work_fitness_app
        },
        
        
    ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{ once:true }}
    id='our-work' className='flex flex-col items-center gap-7 px-4 
    sm:px12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <Title title="Our latest work" desc="From strategy to execution, we craft digital 
        solutions that move your business forward." />

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>


        {
            workData.map((work, index)=>(
                <motion.div
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.2}}
                viewport={{ once:true }} 
                key={index} className='hover:scale-102 duration-500 transition-all
                cursor-pointer'>
                    <img src={work.image} alt="" className='w-full rounded-xl' />
                    <h3 className='mt-3 mb-2 text-lg font-smeibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </motion.div>
            ))
        }
    </div>


    </motion.div>
  )
}

export default OurWork