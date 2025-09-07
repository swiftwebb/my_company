import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
    const serviceData = [
        {
            title: "Website",
            description: "We craft stunning, user-friendly websites that bring your brand to life online. Our sites are built to attract, engage, and convert visitors into loyal customers.",
            icon: assets.ads_icon
        },
        {
            title: "Mobile app ",
            description: "We design and develop sleek, high-performing mobile apps that put your business in your customers’ hands. Our apps are built to deliver seamless experiences and drive engagement on the go.",
            icon: assets.marketing_icon
        },
        {
            title: "Ai automation",
            description: "We build smart AI automations that save time, cut costs, and boost efficiency. From chatbots to workflow automation, we help businesses work smarter, not harder.",
            icon: assets.content_icon
        },
        {
            title: "Customer support",
            description: "We create AI-powered customer service solutions that respond instantly, resolve issues, and keep your customers satisfied 24/7. Smarter support means happier clients and more time for your business to grow.",
            icon: assets.social_icon
        },
    ]
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{ once:true }}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 
    sm-:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 
        -z-1 dark:hidden'/>
        <Title title="How can we help?" desc="From design to launch, we build websites that showcase your brand and drive your business forward."/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {/* <div className='flex flex-col mid:grid grid-cols-2'> */}
            {serviceData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services