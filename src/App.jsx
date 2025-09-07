import React, { useEffect, useRef, useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Trustedby from './component/Trustedby'
import Services from './component/Services'
import OurWork from './component/OurWork'
import Teams from './component/Teams'
import ContactUs from './component/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './component/Footer'
import { motion } from "motion/react"

const App = () => {
  const dotRef = useRef(null)
  const outlineRef = useRef(null)


  const mouse = useRef({x:0, y:0})
  const position = useRef({x:0, y:0})

  useEffect(()=>{
    const handleMouseMove = (e)=> {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

    }
    document.addEventListener('mousemove', handleMouseMove)
    const animate = ()=> {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1
      if(dotRef.current && outlineRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${mouse.current.x -20}px, ${mouse.current.y -20}px, 0)`
      }
      requestAnimationFrame(animate)

    }
    animate()
    return ()=>{
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): ('light'))
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} settheme={settheme}/>
      <Hero />
      {/* <Trustedby /> */}
      <Services />
      <OurWork />
      {/* <Teams /> */}
      <ContactUs /> 
      <Footer theme={theme} />
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10
      rounded-full border border-primary pointer-events-none z-[9999]'
      style={{transition: 'transform 0.3s ease-out'}}>
        </div>   
        <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full 
        bg-primary pointer-events-none z-[9999]'>

        </div>
    </div>
  )
}

export default App