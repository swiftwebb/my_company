import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({theme}) => {
  return (
    <motion.div 
    initial={{opacity: 0, y: 50}}
     animate={{opacity: 1, y: 0}}
     transition={{duration: 0.8}}
     viewport={{ once:true }} 
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 
    sm:px-10 lg:px-24 xl:px-40'>
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <motion.div 
            initial={{opacity: 0, y: -30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{ once:true }} 
            
            className='spacy-y-5 text-sm text-gray-700 drak:text-gray-400'>
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-44' alt="" height="10" />
                <p className='max-w-md'>From concept to completion, we develop dynamic websites that increase your online visibility, attract more customers, and position your business for lasting growth.</p>
                <ul className='flex gap-8'>
                    <li><a href="#" className='hover:text-primary'>Home</a></li>
                    <li><a href="#services" className='hover:text-primary'>Services</a></li>
                    <li><a href="#our-work" className='hover:text-primary'>Our Work</a></li>
                    <li><a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>
                </ul>


            </motion.div>


              {/* <motion.div 
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              viewport={{ once:true }}  
              className='text-gray-600 dark:text-gray-400'>

                <h3 className='font-semibold'>
                Subscribe to our newsletter
                </h3>
                <p className='text-sm mt-2 mb-6'>
                The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <div className='flex gap-2 text-sm'>
                <input type="text" placeholder='Enter your email' className='w-full p-3 text-sm 
                outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 
                dark:border-gray-500' />
                <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                </div>

              </motion.div> */}

        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6' />
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once:true }} 
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
          <p>Copyright 2026 © Baxting - All Right Reserved.</p>
          <div className='flex items-center justify-between gap-4'>
            <a href="https://www.facebook.com/share/1Avd19zDrg/?mibextid=wwXIfr"><img src= {assets.facebook_icon} alt="" /></a>
            <a href="https://x.com/baxting_?s=21&t=UfL2TSefBYcyB3RM3alREQ"><img src= {assets.twitter_icon} alt="" /></a>
            <a href="https://www.instagram.com/baxting2025?igsh=MWdjNWJ2YzJidWk3dQ%3D%3D&utm_source=qr"><img src= {assets.instagram_icon} alt="" /></a>
            {/* <a href=""><img src= {assets.linkedin_icon} alt="" /></a> */}
          </div>

        </motion.div>
    </motion.div>
  )
}

export default Footer