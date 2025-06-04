import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Technologies from './components/Technologies' 
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import { motion } from 'motion/react'




function App() {
  return (
    <>
    <motion.div 
    
    className="main overflow-hidden bg-black w-full min-h-screen px-20 py-6 text-neutral-200  relative">
      <Navbar></Navbar>

      <motion.div 
      initial={{ opacity: 0, scale: 0.90 }}
      animate={{}}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}  

      className="landing h-screen w-full flex items-center justify-center">
        <Center></Center>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}

      id='skills' className="skill">
        <Technologies></Technologies>
      </motion.div>

      <motion.div 
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      id='projects ' className="projects">
        <Projects></Projects>
      </motion.div>
      
      <div>
        <Experiences></Experiences>
      </div>


      
    <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }} 
    id='contact' className="footer">      
      <Footer></Footer>
    </motion.div>
    </motion.div>
    </>
  )
}

export default App