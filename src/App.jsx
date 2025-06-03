import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Technologies from './components/Technologies' 
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <div className="main bg-black w-full min-h-screen px-20 py-6 text-neutral-200 overflow-hidden relative">
      <Navbar></Navbar>

      <div className="landing h-screen w-full flex items-center justify-center">
        <Center></Center>
      </div>
      <div className="skill">
        <Technologies></Technologies>
      </div>
      <div className="projects">
        <Projects></Projects>
      </div>
      <div className="experience">
        <Experiences></Experiences>
    </div>
    <div className="footer">
      <Footer></Footer>
    </div>
    </div>
    </>
  )
}

export default App