import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import { motion } from 'motion/react'
import { useProgress } from "@react-three/drei";
import ReactLenis from "lenis/react";

import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";


function App() {

  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);


  return (
    <>
      <ShootingStars />
      <StarsBackground />
      <motion.div className="main  overflow-hidden bg-black min-h-screen px-20 py-6 text-neutral-200  relative">

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

        <motion.div>
          <Experiences></Experiences>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          id='projects ' className="projects ">
          <Projects></Projects>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, }}
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